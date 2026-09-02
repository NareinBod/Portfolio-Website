import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

interface Experience { logo: string; role: string; organization: string; date: string; location: string; tags: string[]; bullets: string[]; }

@Component({ selector: 'app-about', standalone: true, imports: [ScrollRevealDirective], templateUrl: './about.component.html', styleUrls: ['./about.component.scss'] })
export class AboutComponent {

  experiences: Experience[] = [
    { logo: '/feng_chia.png', role: 'Research Assistant', organization: 'Feng Chia University', date: 'Aug 2025 - Dec 2025', location: 'Taichung City, Taiwan', tags: ['PyTorch', 'Transformers', 'Error Analysis'], bullets: ['Fine-tuned a Vision Transformer with transfer learning for a 38-class plant disease classification task.', 'Built an end-to-end PyTorch and Hugging Face pipeline and investigated class-imbalance and edge-case failures.', 'Applied augmentation and hyperparameter tuning to improve robustness and reproducibility.'] },
    { logo: '/dts.png', role: 'Digital Technology Solutions Intern', organization: 'University of Cincinnati', date: 'May 2025 - Aug 2025', location: 'Cincinnati, OH', tags: ['Angular', 'MapsIndoors', 'Production Support'], bullets: ['Validated a production Angular mapping application against CAD plan documents.', 'Built reusable UI components integrated with MapsIndoors and identified mapping inconsistencies before release.', 'Provided third-level support, debugging issues to help maintain application stability.'] },
    { logo: '/danlaw.png', role: 'Software Applications Intern', organization: 'Danlaw', date: 'Jan 2025 - Apr 2025', location: 'Novi, MI', tags: ['Angular', 'OpenAPI', 'Debugging'], bullets: ['Shipped pages and user-facing functionality for a production Angular application.', 'Partnered with engineers to troubleshoot issues across the stack and support on-time team milestones.', 'Authored and maintained OpenAPI documentation to improve developer onboarding and cross-team clarity.'] },
    { logo: '/uc.png', role: 'Engineering Design Teaching Assistant', organization: 'University of Cincinnati', date: 'Aug 2024 - Dec 2024', location: 'Cincinnati, OH', tags: ['Mentoring', 'Communication', 'Design'], bullets: ['Guided students through hands-on engineering design activities and mentoring sessions.', 'Supported demonstrations, grading, and technical course delivery with the teaching team.', 'Helped students connect technical concepts to practical project work.'] }
  ];

  skillGroups = [
    { label: 'Languages', skills: ['Python', 'Java', 'SQL', 'C++', 'JavaScript', 'TypeScript', 'MATLAB'] },
    { label: 'Frameworks', skills: ['Angular', 'FastAPI', 'Node.js', 'Express', 'LangChain', 'PyTorch'] },
    { label: 'Data & cloud', skills: ['MySQL', 'MongoDB', 'ChromaDB', 'Pandas', 'AWS', 'Azure', 'Docker'] },
    { label: 'Workflow', skills: ['Git', 'GitHub Actions', 'Jira', 'OpenAPI', 'Power BI'] }
  ];

}
