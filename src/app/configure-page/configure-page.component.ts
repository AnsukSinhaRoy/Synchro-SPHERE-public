import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { LeadManagementConfigComponent } from '../configure-page components/lead-management-config/lead-management-config.component';
import { CustomerRelationshipManagementConfigComponent } from '../configure-page components/customer-relationship-management-config/customer-relationship-management-config.component';
import { TravelManagementConfigComponent } from '../configure-page components/travel-management-config/travel-management-config.component';
import { ERPModule } from '../landing-page/erpmodule.interface';
import { LandingPageDataService } from '../services/landing-page-data.service'; 
@Component({
  selector: 'app-configure-page',
  standalone: true,
  imports: [MatTabsModule, LeadManagementConfigComponent, CustomerRelationshipManagementConfigComponent, TravelManagementConfigComponent],
  templateUrl: './configure-page.component.html',
  styleUrl: './configure-page.component.css'
})

export class ConfigurePageComponent implements OnInit {
  constructor(/*private dataService: LandingPageDataService*/) {}
  modules: ERPModule[] = [
    { name: 'Customer Relationship Management', checked: false },
    { name: 'Lead Management', checked: true },
    { name: 'Travel management', checked: false }
  ];
  
  selectedIndex = 0;
  ngOnInit() {
    // Find the index of the first module that is checked
    //this.modules = this.dataService.getModules().filter(module => module.checked);
    const firstCheckedModule = this.modules.find(module => module.checked);
    if (firstCheckedModule) {
      this.selectedIndex = this.modules.indexOf(firstCheckedModule);
    }
  }
}