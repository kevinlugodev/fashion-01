import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowserService } from '@app/core/services/browser.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private readonly browserService: BrowserService = inject(BrowserService);

  showMenu = signal(false);
  headerLight = signal(false);

  ngOnInit() {
    if (this.browserService.isNotPlatformBrowser) {
      return;
    }

    fromEvent(window, 'resize').subscribe(() => {
      this.showMenu.set(false);
    });

    fromEvent(window, 'scroll').subscribe(() => {
      this.headerLight.set(window.scrollY >= 200);
    });
  }

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu());
  }

  scrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
