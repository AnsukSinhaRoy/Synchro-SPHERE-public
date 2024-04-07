import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ERPModule } from './erpmodule.interface';
import { LandingPageDataService } from '../services/landing-page-data.service';
import { Router } from '@angular/router';
import { DialogRegisterOrganizationComponent } from '../shared/dialog-register-organization/dialog-register-organization.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatCheckboxModule, NgFor, FormsModule, MatButtonModule, MatFormField, MatLabel, MatInputModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  landingPageData: any = {};
  organizationName: string = '';
  constructor(private dialog: MatDialog,private snackBar: MatSnackBar, private _LandingPagedataservice: LandingPageDataService, private router: Router
  ) {
    // ...
  }
  modules: ERPModule[] = [
    { name: 'Travel Management', checked: false },
    { name: 'Lead Management', checked: false },
    { name: 'Customer Relationship Management', checked: false }
  ];

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.modules.every(module => module.checked);
  }

  someComplete(): boolean {
    return this.modules.filter(module => module.checked).length > 0 && !this.allComplete;
  }

  setAll(checked: boolean) {
    this.allComplete = checked;
    this.modules.forEach(module => (module.checked = checked));
  }
  confirm() {
    if (this.modules.every(module => !module.checked)) {
      this.snackBar.open('Select some component', 'Add All', {
        duration: 3500,
      }).onAction().subscribe(() => {
        this.setAll(true);
      });
    } 
    else 
    {
      //this._dataservice.setOrganizationName(this.organizationName);
      this._LandingPagedataservice.setModules(this.modules);
      //this.router.navigate(['/welcome']);
      const dialogRef = this.dialog.open(DialogRegisterOrganizationComponent, {
        width:'900px',
        data: { name: '', email: '', organizationName: '', phoneNumber: '' }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(result);
          this.landingPageData = {
            modules: this.modules,
            result: result
          };
          this._LandingPagedataservice.setLandingPageData(this.landingPageData);
          this._LandingPagedataservice.setOrganizationName(result.organizationName);
          this.router.navigate(['/welcome']);
        }
      });
    }
  }
}