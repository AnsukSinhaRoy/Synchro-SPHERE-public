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

  constructor(private _LandingPagedataservice: LandingPageDataService, private _logindataservice: LoginPageDataService, private router: Router) {
    this.organizationName = this._LandingPagedataservice.getOrganizationName();
    this.modules = this._LandingPagedataservice.getModules().filter(module => module.checked && module.available);

    if (this.modules.length === 0) {
      if (!this._logindataservice.getUserData()) {
        this.router.navigate(['']);
      }
      else { /*login workflow */
      //this.modules = this._logindataservice.getAccessibleModulesToOrg().filter(module => module.checked);
      console.log("else is executed in show - selected - cards")
      }
    }
  }

  selectModule(module: ERPModule){
    if (!module.clickable) {
      return;
    }
    this._LandingPagedataservice.setSelectedModule(module.name);
    this.router.navigate(['/configure']);
  }
}
