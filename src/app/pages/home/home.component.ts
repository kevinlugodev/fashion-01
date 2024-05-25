import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BrowserService } from '@app/core/services/browser.service';
import { HeroComponent } from '@app/pages/home/components/hero/hero.component';
import { HighlightsComponent } from '@app/pages/home/components/highlights/highlights.component';
import { HookComponent } from '@app/pages/home/components/hook/hook.component';
import { ProductsComponent } from '@app/pages/home/components/products/products.component';
import { InViewportDirective } from '@shared/directives/in-viewport.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    HookComponent,
    ProductsComponent,
    NgOptimizedImage,
    InViewportDirective,
    HighlightsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit {
  private readonly browserService: BrowserService = inject(BrowserService);

  ngOnInit() {
    if (this.browserService.isNotPlatformBrowser) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
