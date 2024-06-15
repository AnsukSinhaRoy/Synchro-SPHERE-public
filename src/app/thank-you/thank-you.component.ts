import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [
    BrowserModule,
    
  ],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

}
