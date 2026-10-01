import { Component } from '@angular/core';

interface ExperienceItem {
  when: string;
  role: string;
  org: string;
  desc: string;
}

interface SkillGroup {
  label: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly experiences: ExperienceItem[] = [
    {
      when: 'AUG — DEC 2025',
      role: 'Computer Vision Research Assistant',
      org: 'Feng Chia University',
      desc: 'Fine-tuned a Vision Transformer on a 38-class plant disease task and built an end-to-end PyTorch / Hugging Face pipeline, improving robustness through systematic error analysis.',
    },
    {
      when: 'MAY — AUG 2025',
      role: 'Digital Technology Solutions Intern',
      org: 'University of Cincinnati',
      desc: 'Validated a production Angular app against CAD plans, built reusable MapsIndoors UI components, and provided third-level production support in Agile.',
    },
    {
      when: 'JAN — APR 2025',
      role: 'Software Applications Intern',
      org: 'Danlaw',
      desc: 'Shipped pages and features for a production Angular app and authored OpenAPI documentation for internal APIs.',
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
