import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserService } from '@app/core/services/browser.service';
import { FooterComponent } from '@app/layouts/footer/footer.component';
import { HeaderComponent } from '@app/layouts/header/header.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly browserService: BrowserService = inject(BrowserService);

  positions = signal({ x: 0, y: 0, cursor: 'default' });

  ngOnInit() {
    if (this.browserService.isNotPlatformBrowser) {
      return;
    }

    fromEvent(window, 'mousemove').subscribe((e: any) => {
      const cursor = window.getComputedStyle(e.target as Element).cursor;
      this.positions.set({
        x: e.x,
        y: e.y,
        cursor
      })
    });
  }
}
