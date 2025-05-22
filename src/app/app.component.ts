import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from "./components/navabar/navabar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PageServicesComponent } from "./components/page-services/page-services.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavabarComponent, HeroComponent, PageServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'consultorio-psicologia';
}
