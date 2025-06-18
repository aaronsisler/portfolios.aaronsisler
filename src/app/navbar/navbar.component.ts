import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled: boolean = false;

  private scrollHandler = () => {
    this.isScrolled = window.scrollY > 50;
  };

  ngOnInit(): void {
    window.addEventListener("scroll", this.scrollHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
