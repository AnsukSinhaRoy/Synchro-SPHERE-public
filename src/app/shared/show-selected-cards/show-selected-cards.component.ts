import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ERPModule } from '../../services/Interfaces/erpmodule.interface';
import { LandingPageDataService } from '../../services/landing-page-data.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { LoginPageDataService } from '../../services/login-page-data.service';

@Component({
  selector: 'app-show-selected-cards',
  standalone: true,
  imports: [MatCardModule, NgFor, MatButtonModule, MatButton, MatRipple],
  templateUrl: './show-selected-cards.component.html',
  styleUrl: './show-selected-cards.component.css'
})
export class ShowSelectedCardsComponent {
  organizationName: string = '';
  modules: ERPModule[] = [];

  constructor(private _landingpagedataService: LandingPageDataService,private _logindataservice: LoginPageDataService, private router: Router) {
    this.organizationName = this._landingpagedataService.getOrganizationName();
    this.modules = this._landingpagedataService.getModules().filter(module => module.checked);
    if (this.modules.length === 0) {
      if (!this._logindataservice.getUserData()) {
        this.router.navigate(['']);
      }
      else{
        console.log('show-selected-cards page if', this._logindataservice.getUserData())
      }
    }
  }

  selectModule(module: ERPModule){
    this._landingpagedataService.setSelectedModule(module.name);
    this.router.navigate(['/configure']);
  }
}
