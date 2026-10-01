import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

/* ── Simple in-memory rate limiter (per cold start; Vercel serverless) ── */
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRate(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

/* ── Email validation ─────────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_TOPICS = new Set(['Internship', 'A project', 'Collab', 'Just hi']);

/* ── Handler ──────────────────────────────────────────────────────── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed.' });
  }

  /* Rate limiting */
  const ip =
    (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ??
    req.socket?.remoteAddress ??
    'unknown';

  if (!checkRate(ip)) {
    return res.status(429).json({ ok: false, message: 'Too many messages. Try again later.' });
  }

  /* Parse body */
  const { topic, name, email, message, website } = req.body ?? {};

  /* Honeypot */
  if (website) {
    // Silently succeed to confuse bots.
    return res.status(200).json({ ok: true });
  }

  /* Validation */
  const topicStr = typeof topic === 'string' ? topic.trim() : '';
  const nameStr  = typeof name  === 'string' ? name.trim()  : '';
  const emailStr = typeof email === 'string' ? email.trim() : '';
  const msgStr   = typeof message === 'string' ? message.trim() : '';

  if (!VALID_TOPICS.has(topicStr)) {
    return res.status(400).json({ ok: false, message: 'Invalid topic.' });
  }
  if (!nameStr) {
    return res.status(400).json({ ok: false, message: 'Name is required.' });
  }
  if (!EMAIL_RE.test(emailStr)) {
    return res.status(400).json({ ok: false, message: 'A valid email is required.' });
  }
  if (!msgStr || msgStr.length > 600) {
    return res.status(400).json({ ok: false, message: 'Message must be 1–600 characters.' });
  }

  /* Sanitize */
  const sanitize = (s: string) =>
    s.replace(/[<>"'&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' }[c] ?? c));

  const safeName    = sanitize(nameStr);
  const safeTopic   = sanitize(topicStr);
  const safeMessage = sanitize(msgStr);

  /* Send via Resend */
  const apiKey = process.env['RESEND_API_KEY'];
  const toEmail = process.env['CONTACT_EMAIL'] ?? 'boddapnn@mail.uc.edu';

  if (!apiKey) {
    console.error('RESEND_API_KEY env var not set');
    return res.status(500).json({ ok: false, message: 'Mail service not configured.' });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <contact@nareinboddapati.vercel.app>',
      to:   [toEmail],
      replyTo: emailStr,
      subject: `[${safeTopic}] from ${safeName}`,
      html: `
        <p><strong>Topic:</strong> ${safeTopic}</p>
        <p><strong>From:</strong> ${safeName} &lt;${emailStr}&gt;</p>
        <hr>
        <p>${safeMessage.replace(/\n/g, '<br>')}</p>
      `,
      text: `Topic: ${topicStr}\nFrom: ${nameStr} <${emailStr}>\n\n${msgStr}`,
    });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ ok: false, message: 'Failed to send. Try emailing directly.' });
  }

  return res.status(200).json({ ok: true });
}
