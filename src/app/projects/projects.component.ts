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
      name: 'Kortex',
      type: 'Full Stack',
      summary: 'A full-stack Retrieval-Augmented Generation application for natural-language Q&A over user-uploaded documents, with streamed responses and source citations planned.',
      contribution: 'Built document ingestion and retrieval using text chunking, embeddings, persistent ChromaDB storage, LangChain, and an async FastAPI backend.',
      stack: ['Angular', 'FastAPI', 'LangChain', 'ChromaDB', 'Docker'],
      impact: 'Makes uploaded knowledge bases searchable through grounded natural-language answers.',
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
      name: 'Atlantis',
      type: 'Full Stack',
      summary: 'A secure real-time collaborative messaging platform built with a team, with authentication, role-based access control, group chat, MongoDB Atlas, Azure, and CI/CD.',
      contribution: 'Implemented secure messaging workflows and helped design a scalable Azure deployment architecture.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Azure', 'GitHub Actions'],
      impact: 'A practical collaboration product designed for reliable, automated deployment.'
    }
  ];
}
