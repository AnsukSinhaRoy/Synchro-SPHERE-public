import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerRelationshipManagementConfigComponent } from '../configure-page components/customer-relationship-management-config/customer-relationship-management-config.component';
import { ERPModule } from '../services/Interfaces/erpmodule.interface';
import { Router } from '@angular/router';
import { LoginPageDataService } from '../services/login-page-data.service';
import { CrmDashboardComponent } from '../Dashboard-page-components/crm-dashboard/crm-dashboard.component';
import { MasterDataService } from '../services/master-data.service';
import { StateVariablesService } from '../services/state-variables.service';
@Component({
  selector: 'app-configure-page',
  standalone: true,
  imports: [MatTabsModule, CustomerRelationshipManagementConfigComponent, CrmDashboardComponent],
  templateUrl: './configure-page.component.html',
  styleUrl: './configure-page.component.css'
})

export class ConfigurePageComponent {

  modules: ERPModule[] = [];
  selectedIndex = 0;
  selectedModuleid: number;

  constructor(private _statemanagementservice: StateVariablesService, public _logindataservice: LoginPageDataService, private router: Router, private _masterdata: MasterDataService) 
  {
    this.modules = this._masterdata.modules.filter(module => module.checked);
    this.selectedModuleid = this._statemanagementservice.SelectedModuleid;
    if (this._masterdata.modules.filter(module => module.available === true).length !== 0) {
      this.modules =this._masterdata.modules.filter(module => module.clickable === true)
      const selectedModuleIndex = this.modules.findIndex(module => module.id === this.selectedModuleid);
      if (selectedModuleIndex !== -1) {
        // If a module with the selectedModuleName exists, select it
        this.selectedIndex = selectedModuleIndex;
      } else {
        // Otherwise, select the first checked module
        const checkedModuleIndex = this.modules.findIndex(module => module.clickable);

        if (checkedModuleIndex !== -1) {
          this.selectedIndex = checkedModuleIndex;
        }
      }
    }
    else {
      this.router.navigate(['']);
    }
  }
}
