import { Component } from '@angular/core';
import { LandingPageDataService } from '../../services/landing-page-data.service';
import { ERPModule } from '../../landing-page/erpmodule.interface';
import { NgFor, NgIf } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShowSelectedCardsComponent } from '../../shared/show-selected-cards/show-selected-cards.component';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [NgFor,ShowSelectedCardsComponent, MatListModule, MatButtonModule, MatCardModule, NgIf, MatGridListModule ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent {
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

  getStarted(){
    console.log("Get Started is clicked")
    this.router.navigate(['/configure']);
  }
}

