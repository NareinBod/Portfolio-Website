import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal], [scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit, OnDestroy {
  @Input() scrollReveal: number | '' = '';
  private observer?: IntersectionObserver;

  constructor(private readonly element: ElementRef<HTMLElement>, private readonly renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const delay = typeof this.scrollReveal === 'number' ? this.scrollReveal * 90 : 0;
    this.renderer.addClass(this.element.nativeElement, 'scroll-reveal');
    this.renderer.setStyle(this.element.nativeElement, '--reveal-delay', `${delay}ms`);

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.element.nativeElement, 'is-revealed');
        this.observer?.unobserve(this.element.nativeElement);
      }
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
