import { Component, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  mode: boolean = true;
  isDarkTheme: boolean = false;
  selectedLink: string = '';

  @ViewChild('highlightBox') highlightBox!: ElementRef;
  @ViewChild('navLinks') navLinks!: ElementRef;
  @ViewChildren('homeLink, aboutLink, projectsLink') links!: QueryList<ElementRef>;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.moveHighlight(), 0); // wait for DOM update
      }
    });

    this.moveHighlight();
  }

  moveHighlight() {
    const activeLink = this.links.find(link =>
      link.nativeElement.classList.contains('active')
    );

    if (activeLink) {
      const linkEl = activeLink.nativeElement;
      const linkRect = linkEl.getBoundingClientRect();
      const containerRect = this.navLinks.nativeElement.getBoundingClientRect();

      const offsetLeft = linkRect.left - containerRect.left;
      const offsetTop = linkRect.top - containerRect.top;

      this.renderer.setStyle(this.highlightBox.nativeElement, 'width', `${linkRect.width}px`);
      this.renderer.setStyle(this.highlightBox.nativeElement, 'height', `${linkRect.height}px`);
      this.renderer.setStyle(this.highlightBox.nativeElement, 'left', `${offsetLeft}px`);
      this.renderer.setStyle(this.highlightBox.nativeElement, 'top', `${offsetTop}px`);
    }
  }

  onClick() {
    this.mode = !this.mode;
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.classList.add('dark-mode');
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.classList.remove('dark-mode');
    }
  }

  changeColor(link: string) {
    this.selectedLink = link;
  }
}
