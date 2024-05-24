import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';
import { BrowserService } from '@app/core/services/browser.service';

@Directive({
  standalone: true,
  selector: '[appInViewport]'
})
export class InViewportDirective {
  private readonly browserService: BrowserService = inject(BrowserService);
  private readonly className: string = 'in-view';
  private _intersectionObserver!: IntersectionObserver;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2
  ) {
  }

  public ngAfterViewInit() {
    if (this.browserService.isNotPlatformBrowser) {
      return;
    }

    this._intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    });
    this._intersectionObserver.observe((this._element.nativeElement) as Element);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this._renderer.addClass(this._element.nativeElement, this.className);

        if (!this._intersectionObserver) {
          return;
        }

        this._intersectionObserver.unobserve((this._element.nativeElement) as Element);
        this._intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (entry as any).isIntersecting && entry.target === this._element.nativeElement;
  }
}
