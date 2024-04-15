import { Component } from '@angular/core';
import { LandingPageDataService } from '../services/landing-page-data.service';
import { ERPModule } from '../services/Interfaces/erpmodule.interface';
import { NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShowSelectedCardsComponent } from '../shared/show-selected-cards/show-selected-cards.component';
import { LoginPageDataService } from '../services/login-page-data.service';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgFor, ShowSelectedCardsComponent, MatListModule, MatButtonModule, MatCardModule, NgIf, MatGridListModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  organizationName: string = '';
  mode: string = 'dashboard';
  modules: ERPModule[] = [];

  constructor(
    private dataService: LandingPageDataService,
    private _logindataservice: LoginPageDataService,
    private router: Router
  ) {
    this.modules = this.dataService.getModules().filter(module => module.checked);
    if (this.modules.length === 0) {
      if (!this._logindataservice.getUserData()) {
        this.router.navigate(['']);
      } else {
        this.organizationName = this._logindataservice.getOrganizationName();
      }
    } else {
      this.organizationName = this.dataService.getOrganizationName();
    }
  }

  canConfigure(): boolean {
    return this._logindataservice.getconfigurePermission();
  }

  toggleMode(): void {
    this.mode = this.mode === 'dashboard' ? 'configure' : 'dashboard';
    this._logindataservice.setMode(this.mode); // Update mode in data service
  }
}