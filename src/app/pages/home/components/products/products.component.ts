import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InViewportDirective } from '@shared/directives/in-viewport.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgOptimizedImage,
    InViewportDirective
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
