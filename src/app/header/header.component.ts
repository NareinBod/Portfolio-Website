import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  readonly activeSection = signal('home');
  readonly isScrolled = signal(false);
  private sectionObserver?: IntersectionObserver;
  private scrollObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = ['home', 'about', 'projects', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    this.sectionObserver = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        this.activeSection.set(visibleSection.target.id);
      }
    }, { threshold: [0.35, 0.6], rootMargin: '-20% 0px -45% 0px' });

    sections.forEach((section) => this.sectionObserver?.observe(section));

    const home = document.getElementById('home');
    if (home) {
      this.scrollObserver = new IntersectionObserver(([entry]) => {
        this.isScrolled.set(!entry.isIntersecting);
      }, { threshold: 0.12 });
      this.scrollObserver.observe(home);
    }
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.scrollObserver?.disconnect();
  }
}
