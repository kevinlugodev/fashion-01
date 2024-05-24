import { NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hook',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hook.component.html',
  styleUrl: './hook.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HookComponent {
}
