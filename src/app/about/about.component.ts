import { Component } from "@angular/core";
import {
  bootstrapGlobeAmericas,
  bootstrapLayers,
  bootstrapLightningCharge,
} from "@ng-icons/bootstrap-icons";
import { NgIcon, provideIcons } from "@ng-icons/core";

@Component({
  selector: "app-about",
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      bootstrapLayers,
      bootstrapGlobeAmericas,
      bootstrapLightningCharge,
    }),
  ],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {}
