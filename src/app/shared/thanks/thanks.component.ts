import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardMdImage, MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [MatIcon, MatCardModule, MatButtonModule],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']);
  }

}