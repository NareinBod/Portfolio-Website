import { Component } from '@angular/core';

interface Project {
  n: string;
  title: string;
  desc: string;
  stack: string;
  href: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: Project[] = [
    {
      n: '01',
      title: 'Kortex',
      desc: 'Full-stack document RAG platform: natural-language Q&A over uploaded documents, with chunking, embeddings and persistent vector storage behind an async API.',
      stack: 'Angular · FastAPI · LangChain · ChromaDB · Docker',
      href: 'https://github.com/NareinBod',
    },
    {
      n: '02',
      title: 'Momentum',
      desc: 'Business operations and manufacturing analytics: an ETL pipeline over 5,000+ records, a custom Supplier Risk Score, demand forecasting, a what-if reorder simulator and a 3-page Power BI dashboard.',
      stack: 'Python · MySQL · Pandas · Power BI',
      href: 'https://github.com/NareinBod',
    },
    {
      n: '03',
      title: 'Atlantis',
      desc: 'Secure real-time collaborative messaging platform with role-based access, group chat, Azure deployment and a GitHub Actions CI/CD pipeline.',
      stack: 'Node.js · Express · MongoDB · Azure · Socket.io',
      href: 'https://github.com/NareinBod',
    },
  ];
}
