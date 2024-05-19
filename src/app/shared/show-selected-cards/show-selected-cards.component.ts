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
        this._logindataservice.initializeUserData();
        //this.router.navigate(['']);
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
    // Ensure the backgroundImage property is a string that represents the path to the image
    const imageUrl = `assets/${module.backgroundImage}`;
    return module.gradient;
  }
  getHoverBackground(): string {
    if (this.hoveredModule) {
      console.log("hovered" + this.hoveredModule.hoverGradient);
      return this.hoveredModule.hoverGradient;
    }
    return '';
  }
  

}
