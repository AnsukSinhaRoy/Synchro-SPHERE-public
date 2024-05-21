import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ERPModule } from '../../services/Interfaces/erpmodule.interface';
import { LandingPageDataService } from '../../services/landing-page-data.service';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { LoginPageDataService } from '../../services/login-page-data.service';

@Component({
  selector: 'app-show-selected-cards',
  standalone: true,
  imports: [MatCardModule, NgFor, MatButtonModule, MatButton, MatRipple, NgStyle, NgClass],
  templateUrl: './show-selected-cards.component.html',
  styleUrl: './show-selected-cards.component.css'
})
export class ShowSelectedCardsComponent {
  organizationName: string = '';
  modules: ERPModule[] = [];
  hover: boolean = false;
  hoveredModule: ERPModule | null = null;

  constructor(private _LandingPagedataservice: LandingPageDataService, private _logindataservice: LoginPageDataService, private router: Router) {
    this.organizationName = this._LandingPagedataservice.getOrganizationName();
    this.modules = this._LandingPagedataservice.getModules().filter(module => module.checked);

    if (this.modules.length === 0) {
      if (!this._logindataservice.getUserData()) {
        this.router.navigate(['']);
      }
      else { /*login workflow */
        //this.modules = this._logindataservice.getAccessibleModulesToOrg().filter(module => module.checked);
        this.modules = this._logindataservice.getModules().filter(module => module.checked && module.available);
        console.log('modules in show selected cards - ', this.modules)
      }
    }
  }

  selectModule(module: ERPModule) {
    if (!module.clickable) {
      return;
    }
    this._LandingPagedataservice.setSelectedModule(module.name);
    if (this._logindataservice.mode == 'dashboard') {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.router.navigate(['/configure']);
    }

  }
  getBackgroundImage(module: ERPModule): string {
    return `${module.gradient}, url('assets/${module.backgroundImage}') no-repeat center/70%`;
  }
  
  getHoverBackground(module: ERPModule): string {
    if (module) {
      return `${module.hoverGradient}, url('assets/${module.backgroundImage}') no-repeat center/90%`;
    }
    return '';
  }
  
}
