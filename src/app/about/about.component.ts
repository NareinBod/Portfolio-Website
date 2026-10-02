import { Component, signal } from '@angular/core';

interface ExperienceItem {
  org:    string;
  role:   string;
  when:   string;
  logo:   string;
  desc:   string;
  points: string[];
  tools:  string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  /** Index of the currently-open experience row; -1 = none */
  readonly open = signal(-1);

  toggle(i: number): void {
    this.open.set(this.open() === i ? -1 : i);
  }

  readonly experiences: ExperienceItem[] = [
    {
      org:   'Feng Chia University',
      role:  'Computer Vision Research Assistant',
      when:  'Aug – Dec 2025',
      logo:  '/feng_chia.png',
      desc:  'Research on plant disease recognition with Vision Transformers.',
      points: [
        'Fine-tuned a Vision Transformer on a 38-class plant disease classification task.',
        'Built an end-to-end PyTorch / Hugging Face training and evaluation pipeline.',
        'Improved model robustness through systematic error analysis.',
      ],
      tools: 'PyTorch · Hugging Face · Vision Transformers',
    },
    {
      org:   'University of Cincinnati',
      role:  'Digital Technology Solutions Intern',
      when:  'May – Aug 2025',
      logo:  '/dts.png',
      desc:  'Worked on a production Angular application in an Agile team.',
      points: [
        'Validated the application against CAD plans.',
        'Built reusable MapsIndoors UI components.',
        'Provided third-level production support.',
      ],
      tools: 'Angular · MapsIndoors · Agile',
    },
    {
      org:   'Danlaw',
      role:  'Software Applications Intern',
      when:  'Jan – Apr 2025',
      logo:  '/danlaw.png',
      desc:  'Contributed to a production Angular application.',
      points: [
        'Shipped pages and features for the production app.',
        'Authored OpenAPI documentation for internal APIs.',
      ],
      tools: 'Angular · OpenAPI',
    },
  ];

  readonly skills: string[] = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'SQL',
    'C++', 'C', 'Assembly', 'MATLAB',
    'Angular', 'FastAPI', 'Node.js', 'Express', 'LangChain',
    'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy',
    'MySQL', 'MongoDB', 'ChromaDB', 'Power BI',
    'AWS', 'Azure', 'Docker', 'Git', 'Jira',
  ];
}
