import { AfterViewChecked, Component, ViewChild, ElementRef } from '@angular/core';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';


interface Experience {
  logo: string;
  role: string;
  organization: string;
  date: string;
  location: string;
  tags: string[];
  bullets: string[];
  current?: boolean;
}

interface Credential {
  name: string;
  issuer: string;
  date: string;
  url: string;
  type?: 'aws-badge' | 'pdf';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewChecked {

  @ViewChild('credlyBadge')
  credlyBadge?: ElementRef<HTMLDivElement>;

  showAwsBadge = false;
  private credlyScriptLoaded = false;

  experiences: Experience[] = [
    {
      logo: '/feng_chia.png',
      role: 'Research Assistant',
      organization: 'Feng Chia University',
      date: 'Aug 2025 - Present',
      location: 'Taichung City, Taiwan',
      tags: ['Python', 'CNNs', 'Segmentation', 'Research'],
      current: true,
      bullets: [
        'Implemented and trained LeNet, ResNet, and U-Net architectures for classification and image segmentation tasks.',
        'Built Python scripts for preprocessing, training, evaluation, and debugging model workflows.',
        'Collaborated with a faculty mentor to design experiments and improve research repeatability.'
      ]
    },
    {
      logo: '/dts.png',
      role: 'Digital Technology Solutions Worker',
      organization: 'University of Cincinnati',
      date: 'May 2025 - Aug 2025',
      location: 'Cincinnati, OH',
      tags: ['Angular', 'TypeScript', 'MapsIndoors', 'QA'],
      bullets: [
        'Validated an Angular web application against CAD plan documents and map requirements.',
        'Developed reusable UI components that improved responsiveness and usability.',
        'Supported debugging and issue triage in an Agile engineering environment.'
      ]
    },
    {
      logo: '/danlaw.png',
      role: 'Software Applications Intern',
      organization: 'Danlaw',
      date: 'Jan 2025 - Apr 2025',
      location: 'Novi, MI',
      tags: ['Angular', 'OpenAPI', 'Documentation', 'Debugging'],
      bullets: [
        'Enhanced Angular application pages and user-facing functionality.',
        'Authored and maintained OpenAPI documentation for developer and cross-functional use.',
        'Collaborated with teammates to troubleshoot issues and deliver cleaner application workflows.'
      ]
    },
    {
      logo: '/uc.png',
      role: 'Engineering Design Teaching Assistant',
      organization: 'University of Cincinnati',
      date: 'Aug 2024 - Dec 2024',
      location: 'Cincinnati, OH',
      tags: ['Mentoring', 'Communication', 'Problem Solving'],
      bullets: [
        'Supported students during hands-on engineering design activities and mentoring sessions.',
        'Collaborated with the teaching team on grading, demonstrations, and course support.',
        'Helped students translate technical concepts into practical project work.'
      ]
    }
  ];

  skillGroups = [
    { label: 'Languages', skills: ['Python', 'SQL', 'R', 'C++', 'JavaScript', 'TypeScript', 'Matlab'] },
    { label: 'Data & Analytics', skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Excel'] },
    { label: 'Cloud & Development', skills: ['AWS', 'Azure', 'Docker', 'MongoDB', 'Express.js', 'Angular', 'Node.js', 'Git'] },
    { label: 'Machine Learning', skills: ['PyTorch', 'Scikit-learn', 'OpenCV'] }
  ];

  credentials: Credential[] = [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 2026',
      url: '',
      type: 'aws-badge'
    },
    {
      name: 'Supervised Machine Learning',
      issuer: 'Stanford University',
      date: 'Mar 2025',
      url: '/Coursera_SL.pdf',
      type: 'pdf'
    },
    {
      name: 'Intro to Machine Learning',
      issuer: 'Kaggle',
      date: 'Dec 2024',
      url: '/Intro_To_ML.pdf',
      type: 'pdf'
    },
    {
      name: 'Technical Security Audit and Assessment',
      issuer: 'LinkedIn',
      date: 'Nov 2024',
      url: '/Linkedin.pdf',
      type: 'pdf'
    }
  ];
  openCredential(credential: Credential): void {
    if (credential.name === 'AWS Certified Cloud Practitioner') {
      this.showAwsBadge = true;
      return;
    }

    window.open(credential.url, '_blank', 'noopener,noreferrer');
  }

  closeAwsBadge(): void {
    this.showAwsBadge = false;
  }

  ngAfterViewChecked(): void {
    if (this.showAwsBadge && this.credlyBadge && !this.credlyScriptLoaded) {
      this.loadCredlyScript();
    }
  }

  private loadCredlyScript(): void {
    if (document.querySelector('script[src*="credly.com"]')) {
      this.credlyScriptLoaded = true;
      return;
    }

    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';

    document.body.appendChild(script);

    this.credlyScriptLoaded = true;
  }
}
