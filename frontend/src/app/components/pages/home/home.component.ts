import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.typeText();
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    window.open('/assets/TatianaK-CV.pdf', '_blank');
  }

  typeText() {
    const textElement = document.querySelector("#typed-text h3");
    const text = "I'm an aspiring software engineer.";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        if (textElement) {
          textElement.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100); // Adjust typing speed here (milliseconds)
        }
      }
    }

    type();
  }
}
