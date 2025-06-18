import { Component } from "@angular/core";

import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: "app-root",
  imports: [NavbarComponent, HeroComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "aaronsisler";
}
