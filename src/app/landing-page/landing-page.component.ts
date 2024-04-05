import { Component } from '@angular/core';
import { WelcomePageComponent } from '../landing-page components/welcome-page/welcome-page.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [WelcomePageComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
