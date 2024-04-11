import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ERPModule } from '../Interfaces/erpmodule.interface';
import { LandingPageDataService } from '../services/landing-page-data.service';
import { Router } from '@angular/router';
import { DialogRegisterOrganizationComponent } from '../shared/dialog-register-organization/dialog-register-organization.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../shared/login/login.component';


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
  modules: ERPModule[] = this._LandingPagedataservice.getModules();

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
      //this.router.navigate(['/welcome']);
      this._LandingPagedataservice.setModules(this.modules);
      const dialogRef = this.dialog.open(DialogRegisterOrganizationComponent, {
        width:'900px',
        data: { name: '', email: '', organizationName: '', phoneNumber: '' }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this._LandingPagedataservice.setOrganizationName(result.organizationName);
          this.router.navigate(['/welcome']);
        }
      });
    }
  }
  login()
  {
    const dialogRef = this.dialog.open(LoginComponent, {
      width:"400px",
      data: { email: '',  password: '' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }
}