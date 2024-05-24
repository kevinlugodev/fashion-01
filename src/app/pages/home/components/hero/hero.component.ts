import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InViewportDirective } from '@shared/directives/in-viewport.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgOptimizedImage,
    InViewportDirective
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
