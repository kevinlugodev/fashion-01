import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hook',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './hook.component.html',
  styleUrl: './hook.component.scss'
})
export class HookComponent {
}
