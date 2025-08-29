import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  logo: string;
  title: string;
  date: string;
  description: string[];
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

  experiences: Job[] = [
  {
    logo: '/feng_chia.png',
    title: 'Research Assistant, Feng Chia Univeristy',
    date: 'Present',
    description: [
      'Contributed to the development and testing of an indoor mapping web application, identifying and correcting mapping errors to improve user accuracy and experience',
      'Collaborated with cross-functional team members in daily stand-up meetings, providing updates, sharing feedback, and aligning on project goals',
      'Performed functional and usability testing of the website, ensuring smooth performance across different platforms and assisting with bug tracking and resolution'
    ]
  },  
  {
    logo: '/dts.png',
    title: 'DTS Ideas DevOps Worker, UC',
    date: 'May 2025 - Aug 2025',
    description: [
      'Contributed to the development and testing of an indoor mapping web application, identifying and correcting mapping errors to improve user accuracy and experience',
      'Collaborated with cross-functional team members in daily stand-up meetings, providing updates, sharing feedback, and aligning on project goals',
      'Performed functional and usability testing of the website, ensuring smooth performance across different platforms and assisting with bug tracking and resolution'
    ]
  },
    {
      logo: '/danlaw.png',
      title: 'Software Applications Intern',
      date: 'Jan 2025 - Apr 2025',
      description: [
        'Enhance an existing Angular application by creating new pages, modifying functionalities, and improving the designs to deliver responsive and user-friendly features',
        'Author and maintain comprehensive API documentation using OpenAPI specification, ensuring clarity and accessibility for developers and stakeholders',
        'Collaborate with other team members to troubleshoot, debug and deliver high-quality solutions while actively contributing to successful project outcomes'
      ]
    },
    {
      logo: '/uc.png',
      title: 'Engineering Design Teaching Assistant',
      date: 'Aug 2024 - Dec 2024',
      description: [
        'Assisted students during in-class activities and peer mentoring sessions, providing targeted assistance to enhance their understanding and engagement with course material',
        'Collaborated with the teaching team to evaluate assignments, exams, and project demonstrations, ensuring fair and consistent grading while offering insights for continuous improvements',
        'Facilitated hands-on learning experiences in the classroom, helping students apply theoretical knowledge through practical exercises and problem-solving activities'
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