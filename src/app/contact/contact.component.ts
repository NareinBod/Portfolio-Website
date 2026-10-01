import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

type Topic = 'Internship' | 'A project' | 'Collab' | 'Just hi';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private readonly http = inject(HttpClient);

  readonly topics: Topic[] = ['Internship', 'A project', 'Collab', 'Just hi'];

  readonly channels = [
    { label: 'EMAIL',    value: 'boddapnn@mail.uc.edu', href: 'mailto:boddapnn@mail.uc.edu' },
    { label: 'GITHUB',   value: 'NareinBod',             href: 'https://github.com/NareinBod' },
    { label: 'LINKEDIN', value: 'in/narein',              href: 'https://linkedin.com/in/narein/' },
  ];

  topic   = signal<Topic>('Internship');
  name    = signal('');
  email   = signal('');
  message = signal('');
  status  = signal('');
  sending = signal(false);
  sent    = signal(false);

  get msgCount(): number {
    return this.message().length;
  }

  pickTopic(t: Topic): void {
    this.topic.set(t);
  }

  send(): void {
    const n = this.name().trim();
    const e = this.email();
    const m = this.message().trim();

    if (!n || !/\S+@\S+\.\S+/.test(e) || !m) {
      this.status.set('Add your name, a valid email and a message.');
      return;
    }

    this.sending.set(true);
    this.status.set('');

    this.http.post('/api/contact', {
      topic:   this.topic(),
      name:    n,
      email:   e,
      message: m,
      // honeypot — always empty from real submissions
      website: '',
    }, { responseType: 'json' }).subscribe({
      next: () => {
        this.sending.set(false);
        this.sent.set(true);
      },
      error: (err) => {
        this.sending.set(false);
        const msg = err?.error?.message;
        this.status.set(msg || 'Something went wrong. Try again?');
      },
    });
  }

  reset(): void {
    this.sent.set(false);
    this.name.set('');
    this.email.set('');
    this.message.set('');
    this.status.set('');
  }
}
