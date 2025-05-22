import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavabarComponent } from '../navabar/navabar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, NavabarComponent, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
