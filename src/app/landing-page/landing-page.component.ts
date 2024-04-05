import {Component} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface ERPModule {
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatCheckboxModule, NgFor, FormsModule, MatButtonModule, MatFormField, MatLabel,MatInputModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  organizationName: string = '';
  constructor(private snackBar: MatSnackBar
  ) {
    // ...
  }
  modules: ERPModule[] = [
    {name: 'Travel Management', checked: false},
    {name: 'Lead Management', checked: false},
    {name: 'Customer Relationship Management', checked: false}
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
    if (!this.organizationName) {
      this.snackBar.open('Please enter the organization name', 'OK', {
        duration: 5000,
      });
    } else if (this.modules.every(module => !module.checked)) {
      this.snackBar.open('Select some component', 'Add All', {
        duration: 5000,
      }).onAction().subscribe(() => {
        this.setAll(true);
      });
    } else {
      console.log(this.modules);
    }
  }
}