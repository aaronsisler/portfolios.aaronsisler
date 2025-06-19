import { Component } from "@angular/core";
import {
  bootstrapEnvelopeFill,
  bootstrapGithub,
  bootstrapLinkedin,
} from "@ng-icons/bootstrap-icons";
import { NgIcon, provideIcons } from "@ng-icons/core";

@Component({
  selector: "app-hero",
  imports: [NgIcon],
  viewProviders: [
    provideIcons({ bootstrapLinkedin, bootstrapGithub, bootstrapEnvelopeFill }),
  ],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
