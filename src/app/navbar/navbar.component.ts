import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { HamburgerComponent } from "../hamburger/hamburger.component";

@Component({
  selector: "app-navbar",
  imports: [CommonModule, HamburgerComponent],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled: boolean = false;
  isToggled: boolean = false;

  navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  toggle() {
    this.isToggled = !this.isToggled;
  }

  setToggle(state: boolean) {
    this.isToggled = state;
  }

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
