import { Component } from "@angular/core";

@Component({
  selector: "app-hamburger",
  imports: [],
  templateUrl: "./hamburger.component.html",
  styleUrl: "./hamburger.component.css",
})
export class HamburgerComponent {
  isToggled: boolean = false;

  toggle() {
    this.isToggled = !this.isToggled;
  }
}
