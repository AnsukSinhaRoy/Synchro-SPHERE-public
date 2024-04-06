import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { LeadManagementConfigComponent } from '../configure-page components/lead-management-config/lead-management-config.component';
import { CustomerRelationshipManagementConfigComponent } from '../configure-page components/customer-relationship-management-config/customer-relationship-management-config.component';
import { TravelManagementConfigComponent } from '../configure-page components/travel-management-config/travel-management-config.component';
import { ERPModule } from '../landing-page/erpmodule.interface';
import { LandingPageDataService } from '../services/landing-page-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-configure-page',
  standalone: true,
  imports: [MatTabsModule, LeadManagementConfigComponent, CustomerRelationshipManagementConfigComponent, TravelManagementConfigComponent],
  templateUrl: './configure-page.component.html',
  styleUrl: './configure-page.component.css'
})

export class ConfigurePageComponent {
  modules: ERPModule[] = [];
  selectedIndex = 0;
  constructor(private dataService: LandingPageDataService, private router: Router) {
    this.modules = this.dataService.getModules().filter(module => module.checked);
    if (this.modules.length === 0) {
      this.router.navigate(['']);
    }
  }
}
/*
ngOnInit() {
    const firstCheckedModule = this.modules.find(module => module.checked);
    if (firstCheckedModule) {
      this.selectedIndex = this.modules.indexOf(firstCheckedModule);
    }
  }
 */