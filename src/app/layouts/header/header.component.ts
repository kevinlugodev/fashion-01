import { Component, inject, OnInit, signal } from '@angular/core';
import { BrowserService } from '@app/core/services/browser.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private readonly browserService: BrowserService = inject(BrowserService);

  showMenu = signal(false);

  ngOnInit() {
    if (this.browserService.isNotPlatformBrowser) {
      return;
    }

    fromEvent(window, 'resize').subscribe(() => {
      this.showMenu.set(false);
    });
  }

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu());
  }
}
