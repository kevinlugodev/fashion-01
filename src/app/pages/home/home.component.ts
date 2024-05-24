import { Component } from '@angular/core';
import { HeroComponent } from '@app/pages/home/components/hero/hero.component';
import { HookComponent } from '@app/pages/home/components/hook/hook.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    HookComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
