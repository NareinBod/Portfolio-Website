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
      desc: 'AI-native document intelligence platform: full-stack RAG for natural-language Q&A over uploaded documents, with agentic tool-calling, streamed responses, grounded citations, and an LLM evaluation harness across 100+ benchmark queries.',
      stack: 'Python · FastAPI · Angular · LangChain · ChromaDB · Claude · Docker',
      href: 'https://github.com/NareinBod/Kortex',
    },
    {
      n: '02',
      title: 'Momentum',
      desc: 'Business operations and manufacturing analytics platform: ETL pipeline over 5,000+ records, operational KPIs, demand forecasting, a what-if reorder simulator, and Power BI dashboards.',
      stack: 'Python · MySQL · Pandas · Power BI',
      href: 'https://github.com/NareinBod/Momentum',
    },
    {
      n: '03',
      title: 'Atlantis',
      desc: 'Secure real-time collaborative messaging platform with authentication, role-based access, REST APIs, Azure deployment, and CI/CD through GitHub Actions.',
      stack: 'Node.js · Express · MongoDB · Azure · Socket.io',
      href: 'https://github.com/uc-se-sm26-team12/uc-se-sm26-team12.github.io',
    },
  ];
}
