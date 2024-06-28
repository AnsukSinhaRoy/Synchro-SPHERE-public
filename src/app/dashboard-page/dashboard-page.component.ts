import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CrmDashboardComponent } from '../Dashboard-page-components/crm-dashboard/crm-dashboard.component';
import { LandingPageDataService } from '../services/landing-page-data.service';
import { LoginPageDataService } from '../services/login-page-data.service';
import { Router } from '@angular/router';
import { ERPModule } from '../services/Interfaces/erpmodule.interface';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [MatTabsModule, CrmDashboardComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {
  modulesInThisPage: ERPModule[] = [];
  selectedIndex = 0;
  selectedModuleid: number;
  constructor(private _landingdataService: LandingPageDataService, public _logindataservice: LoginPageDataService) {
    
    this.selectedModuleid = this._landingdataService.getSelectedModule();
    this.modulesInThisPage = this._logindataservice.getModules().filter(module => module.clickable)
    const selectedModuleIndex = this.modulesInThisPage.findIndex(module => module.id === this.selectedModuleid);
    if (selectedModuleIndex !== -1) {
      this.selectedIndex = selectedModuleIndex;
    } else {
      const checkedModuleIndex = this.modulesInThisPage.findIndex(module => module.checked);

      if (checkedModuleIndex !== -1) {
        this.selectedIndex = checkedModuleIndex;
      }
    }
  }
}
