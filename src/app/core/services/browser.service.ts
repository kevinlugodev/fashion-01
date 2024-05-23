import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  get isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
