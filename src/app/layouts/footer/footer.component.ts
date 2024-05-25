import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InViewportDirective } from '@shared/directives/in-viewport.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    InViewportDirective,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
