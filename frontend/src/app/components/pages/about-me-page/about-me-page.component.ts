import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.css']
})
export class AboutMePageComponent implements OnInit, OnDestroy {
  private collageImages: string[] = [
    'assets/collage-Vertical/image-v7.jpeg'
  ];
  public currentImages: string[] = [];
  private observer!: IntersectionObserver;

  constructor(private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.currentImages = [...this.collageImages];

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        } else {
          this.renderer.removeClass(entry.target, 'visible');
        }
      });
    });

    const items = this.el.nativeElement.querySelectorAll('.collage-item img');
    items.forEach((item: Element) => this.observer.observe(item));
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
