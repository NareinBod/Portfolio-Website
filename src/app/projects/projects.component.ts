import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

interface Project {
  name: string;
  type: string;
  summary: string;
  contribution: string;
  stack: string[];
  impact: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Atlantis — Secure Real-Time Collaborative Messaging Platform',
      type: 'Full Stack',
      summary: 'Full-stack real-time messaging platform with secure authentication, role-based access control, and group chat functionality. Cloud deployment on Microsoft Azure and Docker with RESTful APIs and a CI/CD pipeline via GitHub Actions.',
      contribution: 'Built secure real-time messaging, RESTful APIs, role-based access control, and Azure/Docker deployment workflows.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Azure', 'Docker'],
      impact: 'Delivered a deployable collaboration platform with automated CI/CD.',
      featured: true
    },
    {
      name: 'Momentum — Business Operations & Manufacturing Analytics Platform',
      type: 'Data & Analytics',
      summary: 'Relational MySQL database and Python/Pandas ETL pipeline processing 5,000+ transactional records. Includes a demand forecasting model, What-If Reorder Simulator, and a 3-page Power BI dashboard.',
      contribution: 'Built the data pipeline, forecasting and reorder tools, and business intelligence dashboard.',
      stack: ['Python', 'MySQL', 'Pandas', 'Power BI'],
      impact: 'Turns operational data into demand, inventory, and reporting decisions.',
      featured: true
    },
    {
      name: 'Vision Transformer (ViT) for Plant Disease Detection',
      type: 'Machine Learning',
      summary: 'Fine-tuned Vision Transformer using transfer learning for multi-class plant disease classification across 38 disease classes. End-to-end pipeline covering preprocessing, augmentation, training, and evaluation.',
      contribution: 'Fine-tuned a transformer model and implemented the complete data-to-evaluation workflow.',
      stack: ['Python', 'PyTorch', 'Hugging Face Transformers'],
      impact: 'Supports scalable classification across a broad set of plant diseases.'
    }
  ];
}
