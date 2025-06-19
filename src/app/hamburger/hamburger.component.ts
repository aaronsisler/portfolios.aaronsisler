import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-hamburger",
  imports: [],
  templateUrl: "./hamburger.component.html",
  styleUrl: "./hamburger.component.css",
})
export class HamburgerComponent {
  isToggled: boolean = false;

  @Input() toggled = false;
  @Output() toggledChange = new EventEmitter<boolean>();

  toggle() {
    this.toggled = !this.toggled;
    this.toggledChange.emit(this.toggled);
  }
}
