import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ERPModule } from '../../services/Interfaces/erpmodule.interface';
import { Router } from '@angular/router';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { LoginPageDataService } from '../../services/login-page-data.service';
import { MasterDataService } from '../../services/master-data.service';
import { StateVariablesService } from '../../services/state-variables.service';

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

  constructor(private _statemanagementservice: StateVariablesService, private _logindataservice: LoginPageDataService, private router: Router, private _masterdata: MasterDataService) {

    this.modules = this._masterdata.modules.filter(module => module.checked && module.available);

    if (this.modules.length === 0) {
      this.router.navigate(['']);
    }
  }

  selectModule(module: ERPModule) {
    if (!module.clickable) {
      return;
    }
    this._statemanagementservice.SelectedModuleid=module.id;
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
