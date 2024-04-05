import { Component } from '@angular/core';
import { LandingPageDataService } from '../../services/landing-page-data.service';
import { ERPModule } from '../../landing-page/erpmodule.interface';
import { NgFor } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgFor, MatListModule, MatButtonModule ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
  organizationName: string = '';
  modules: ERPModule[] = [];

  constructor(private dataService: LandingPageDataService) {
    this.organizationName = this.dataService.getOrganizationName();
    this.modules = this.dataService.getModules().filter(module => module.checked);
  }
}