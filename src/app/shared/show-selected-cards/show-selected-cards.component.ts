import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ERPModule } from '../../landing-page/erpmodule.interface';
import { LandingPageDataService } from '../../services/landing-page-data.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-show-selected-cards',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './show-selected-cards.component.html',
  styleUrl: './show-selected-cards.component.css'
})
export class ShowSelectedCardsComponent {
  organizationName: string = '';
  modules: ERPModule[] = [];

  constructor(private dataService: LandingPageDataService, private router: Router) {
    this.organizationName = this.dataService.getOrganizationName();
    this.modules = this.dataService.getModules().filter(module => module.checked);
    console.log(this.modules)
    if (this.modules.length === 0) {
      this.router.navigate(['']);
    }
  }

  selectModule(module: ERPModule){
    console.log("Module selected: " + module.name)
  }
}
