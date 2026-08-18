import { Component } from '@angular/core';

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
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Portfolio Website',
      type: 'Frontend',
      summary: 'A premium Angular portfolio designed to present experience, projects, and internship readiness clearly.',
      contribution: 'Built the full Angular interface, theme system, responsive layouts, contact workflow, and curated project presentation.',
      stack: ['Angular', 'TypeScript', 'SCSS', 'EmailJS', 'Vercel'],
      impact: 'Turns a personal site into a focused recruiting surface.',
      github: 'https://github.com/NareinBod',
      live: 'https://nareinboddapati.vercel.app/',
      featured: true
    },
    {
      name: 'MapsIndoors Validation Tooling',
      type: 'Internship',
      summary: 'Angular application work validating indoor map data against CAD plan documents.',
      contribution: 'Developed reusable UI components, tested map experiences against requirements, and helped resolve front-end inconsistencies.',
      stack: ['Angular', 'TypeScript', 'MapsIndoors', 'QA', 'Agile'],
      impact: 'Improved reliability and usability for a map-heavy application workflow.',
      featured: true
    },
    {
      name: 'Deep Learning Research Pipeline',
      type: 'ML Research',
      summary: 'Research workflows for classification and image segmentation using CNN architectures.',
      contribution: 'Implemented preprocessing, training, evaluation, and debugging scripts for LeNet, ResNet, and U-Net experiments.',
      stack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'CNNs'],
      impact: 'Supported repeatable model experimentation and pixel-level evaluation.'
    },
    {
      name: 'API Documentation System',
      type: 'Developer Experience',
      summary: 'OpenAPI documentation work for software application teams during internship delivery.',
      contribution: 'Authored and maintained API documentation so developers and cross-functional teammates could integrate with less ambiguity.',
      stack: ['OpenAPI', 'REST', 'Angular', 'Technical Writing'],
      impact: 'Reduced friction for teams consuming internal APIs.'
    }
  ];
}