import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from '@app/pages/home/components/hero/hero.component';
import { HookComponent } from '@app/pages/home/components/hook/hook.component';
import { ProductsComponent } from '@app/pages/home/components/products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    HookComponent,
    ProductsComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
