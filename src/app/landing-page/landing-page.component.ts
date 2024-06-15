import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ERPModule } from '../services/Interfaces/erpmodule.interface';
import { LandingPageDataService } from '../services/landing-page-data.service';
import { Router } from '@angular/router';
import { DialogRegisterOrganizationComponent } from '../shared/dialog-register-organization/dialog-register-organization.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../shared/login/login.component';
import { LoginPageDataService } from '../services/login-page-data.service';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatCheckboxModule, NgFor, FormsModule, MatButtonModule, MatFormField, MatLabel, MatInputModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  organizationName: string = '';
  constructor(private dialog: MatDialog,private snackBar: MatSnackBar, private _LandingPagedataservice: LandingPageDataService, private router: Router, private _loginpageDataService: LoginPageDataService) {
    // ...
  }
  modules: ERPModule[] = this._LandingPagedataservice.getModules();

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.modules.every(module => module.checked);
  }
  updateModuleStatus(module: ERPModule) {
    if (module.checked) {
      module.available = true;
      module.clickable = true;
    } else {
      module.available = false;
      module.clickable = false;
    }
    this.updateAllComplete();
  }
  someComplete(): boolean {
    return this.modules.filter(module => module.checked).length > 0 && !this.allComplete;
  }

  setAll(checked: boolean) {
    this.allComplete = checked;
    this.modules.forEach(module => {
      module.checked = checked;
      if (checked) {
        module.available = true;
        module.clickable = true;
      }
    });
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
      this._LandingPagedataservice.setModules(this.modules);
      const dialogRef = this.dialog.open(DialogRegisterOrganizationComponent, {
        width:'900px',
        data: { name: '', email: '', organizationName: '', phoneNumber: '' }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          
          this.router.navigate(['/thanks']);

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
        this.router.navigate(['/welcome']);
      }
    });
  }
}
