import { Component } from "@angular/core";

import {
  bootstrapEnvelopeFill,
  bootstrapGithub,
  bootstrapLinkedin,
} from "@ng-icons/bootstrap-icons";
import { NgIcon, provideIcons } from "@ng-icons/core";

@Component({
  selector: "app-footer",
  imports: [NgIcon],
  viewProviders: [
    provideIcons({ bootstrapLinkedin, bootstrapGithub, bootstrapEnvelopeFill }),
  ],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
