import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  logo: string;
  title: string;
  date: string;
  description: string[];
  current?: boolean;
}

interface experience {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills: string[] = [
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML",
  "Matlab",
  "LabView",
  "Angular",
  "Numpy",
  "Pandas",
  "Scikit-learn",
  "OpenAPI",
  "VBA",
  "Git/Github",
  "CSS",
  "SQL",
  "Jira",
  "SourceTree"
  ];

  // ...existing code...
experiences: Job[] = [
  {
    logo: '/feng_chia.png',
    title: 'Research Assistant, Feng Chia University',
    date: 'Aug 2025 - Present',
    description: [
      'Implemented and trained LeNet, ResNet, and U-Net architectures for classification and image segmentation tasks, achieving high pixel-level accuracy and gaining hands-on experience in deep learning pipelines.',
      'Developed and debugged Python scripts to preprocess datasets, train models, and evaluate performance, improving model reliability and gaining experience in end-to-end neural network workflows.',
      'Collaborated with a faculty mentor to design experiments and apply modern deep learning techniques, ensuring accurate results and enhancing research efficiency.'
    ],
    current: true
  },
  {
    logo: '/dts.png',
    title: 'Digital Technology Solutions Worker, UC',
    date: 'May 2025 - Aug 2025',
    description: [
      'Validated Angular web application against CAD plan documents, integrating MapsIndoors and resolving inconsistencies, improving front-end reliability and testing accuracy.',
      'Developed reusable UI components, enhancing responsiveness and usability while aligning with project requirements and gaining hands-on experience in modern web development.',
      'Provided third-level support in an Agile environment, debugging code and optimizing performance to maintain high system stability.'
    ]
  },
  {
    logo: '/danlaw.png',
    title: 'Software Applications Intern, Danlaw',
    date: 'Jan 2025 - Apr 2025',
    description: [
      'Enhanced an Angular application by creating new pages, modifying functionalities, and implementing responsive, user-friendly features, improving front-end performance and usability.',
      'Authored and maintained API documentation using OpenAPI, ensuring clarity and accessibility for developers and cross-functional teams.',
      'Collaborated with team members to troubleshoot, debug, and deliver high-quality solutions, contributing to successful project outcomes and workflow efficiency.'
    ]
  },
  {
    logo: '/uc.png',
    title: 'Engineering Design Teaching Assistant',
    date: 'Aug 2024 - Dec 2024',
    description: [
      'Assisted students during in-class activities and peer mentoring sessions, providing targeted assistance to enhance their understanding and engagement with course material.',
      'Collaborated with the teaching team to evaluate assignments, exams, and project demonstrations, ensuring fair and consistent grading while offering insights for continuous improvements.',
      'Facilitated hands-on learning experiences in the classroom, helping students apply theoretical knowledge through practical exercises and problem-solving activities.'
    ]
  }
];


  certifications: experience[] = [
    {
      name: "Supervised Machine Learning",
      issuer: "Stanford University",
      date: "Mar 2025",
      url: "/Coursera_SL.pdf"
    },
    {
      name: "Intro to Machine Learning",
      issuer: "Kaggle",
      date: "Dec 2024",
      url: "/Intro_To_ML.pdf"
    },
    {
      name: "Performing a Technical Security Audit and Assesment",
      issuer: "Linkedin",
      date: "Nov 2024",
      url: "/Linkedin.pdf"
    }
  ]

  expandedIndex: number[] = []; // Track expanded accordion indices

  toggleAccordion(index: number): void {
    if (this.expandedIndex.includes(index)) {
      this.expandedIndex = this.expandedIndex.filter((i) => i !== index);
    } else {
      this.expandedIndex.push(index);
    }
  }
}