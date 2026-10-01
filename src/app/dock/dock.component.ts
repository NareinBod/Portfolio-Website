import { Component, OnInit, OnDestroy, signal } from '@angular/core';

interface DockItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-dock',
  standalone: true,
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent implements OnInit, OnDestroy {
  readonly activeSection = signal('top');

  readonly dockItems: DockItem[] = [
    { id: 'top',        label: 'Home'       },
    { id: 'work',       label: 'Work'       },
    { id: 'about',      label: 'About'      },
    { id: 'experience', label: 'Experience' },
    { id: 'skills',     label: 'Skills'     },
    { id: 'contact',    label: 'Contact'    },
  ];

  private readonly scrollHandler = () => {
    const ids = ['top', 'work', 'about', 'experience', 'skills', 'contact'];
    let active = 'top';
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
        active = id;
      }
    }
    this.activeSection.set(active);
  };

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  goTo(id: string, event: Event): void {
    event.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
