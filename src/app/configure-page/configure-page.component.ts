import { Component } from '@angular/core';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import { LeadManagementConfigComponent } from '../lead-management-config/lead-management-config.component';
import { CustomerRelationshipManagementConfigComponent } from '../customer-relationship-management-config/customer-relationship-management-config.component';
import { TravelManagementConfigComponent } from '../travel-management-config/travel-management-config.component';

@Component({
  selector: 'app-configure-page',
  standalone: true,
  imports: [MatTabsModule, LeadManagementConfigComponent, CustomerRelationshipManagementConfigComponent, TravelManagementConfigComponent],
  templateUrl: './configure-page.component.html',
  styleUrl: './configure-page.component.css'
})
export class ConfigurePageComponent {
  tabLabels = ['Customer Relationship Management', 'Lead Management', 'Travel management'];
  tabVisibility = [false, true, true];
  selectedIndex = this.tabVisibility.indexOf(true);
  selectedTabLabel: string | undefined; // Declare selectedTabLabel here

  onTabChange(event: MatTabChangeEvent) {
    this.selectedTabLabel = this.tabLabels[event.index];
  }
}
