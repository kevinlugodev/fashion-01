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
  isMobile = signal(false);

  private readonly devices = [
    /android/i,
    /webos/i,
    /iphone/i,
    /ipad/i,
    /ipod/i,
    /blackberry/i,
    /windows phone/i
  ];

  ngOnInit() {
    if (this.browserService.isNotPlatformBrowser || this.isMobileDevice()) {
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

  isMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any)['opera'];
    const value: boolean = this.devices.some(dispositivo => dispositivo.test(userAgent));
    this.isMobile.set(value);
    return value;
  }
}
