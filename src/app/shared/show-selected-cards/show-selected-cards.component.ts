import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ERPModule } from '../../services/Interfaces/erpmodule.interface';
import { LandingPageDataService } from '../../services/landing-page-data.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-show-selected-cards',
  standalone: true,
  imports: [MatCardModule, NgFor, MatButtonModule, MatButton, MatRipple],
  templateUrl: './show-selected-cards.component.html',
  styleUrl: './show-selected-cards.component.css'
})
export class ShowSelectedCardsComponent {
  organizationName: string = '';
  modules: ERPModule[] = [];

  constructor(private _landingpagedataService: LandingPageDataService, private router: Router) {
    this.organizationName = this._landingpagedataService.getOrganizationName();
    this.modules = this._landingpagedataService.getModules().filter(module => module.checked);
    if (this.modules.length === 0) {
      this.router.navigate(['']);
    }
  }

  selectModule(module: ERPModule){
    this._landingpagedataService.setSelectedModule(module.name);
    this.router.navigate(['/configure']);
  }
}
