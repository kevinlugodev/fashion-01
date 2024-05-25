import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InViewportDirective } from '@shared/directives/in-viewport.directive';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [
    NgOptimizedImage,
    InViewportDirective
  ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss'
})
export class HighlightsComponent {

}
