import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MasterDataService } from '../../services/master-data.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { StateVariablesService } from '../../services/state-variables.service';
@Component({
  selector: 'app-dialog-register-organization',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule,MatButtonModule, MatInputModule,MatCardModule, NgIf, MatIcon,MatDialogContent,MatProgressSpinnerModule
  ],
  templateUrl: './dialog-register-organization.component.html',
  styleUrl: './dialog-register-organization.component.css'
})

export class DialogRegisterOrganizationComponent {
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogRegisterOrganizationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private _masterdata: MasterDataService,
    private router: Router,
    private _statemanagementservice: StateVariablesService
  ) {}

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required,Validators.email])],
    organizationName: ['', Validators.required],
    phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])]
  });

  
  
  /*save(): void {
    if (this.form.valid) {
      this.isLoading = true; // Start loading
      const formData = this.form.value;

      // Replace 'your-api-endpoint' with the actual endpoint
      this.http.post('your-api-endpoint', formData).subscribe({
        next: (response) => {
          this.isLoading = false; // Stop loading on success
          this.dialogRef.close(response); // Close dialog with response data
        },
        error: () => {
          this.isLoading = false; // Stop loading on error
          // Handle error
        }
      });
    }
  }*/
    save(): void {
      if (this.form.valid) {
        this.isLoading = true; // Start loading
        const formData = this.form.value;
        console.log(this._statemanagementservice.selectedModules)
        const body = {
          name: formData.name,
          email: formData.email,
          organizationName: formData.organizationName,
          phoneNumber: formData.phoneNumber,
          module_access_to_org: this._statemanagementservice.selectedModules
        };
    
        this._masterdata.makePostApiCall('/registerOrganization', body).subscribe(
          (response) => {
            // Handle the successful response (e.g., show a success message)
            console.log('Registration successful:', response);
            this.isLoading = false; // Stop loading
            this.dialogRef.close(formData); // Close dialog with form data
            this.router.navigate(['/thanks']);
          },
          (error) => {
            // Handle any errors (e.g., show an error message)
            console.error('Error during registration:', error);
            this.isLoading = false; // Stop loading
          }
        );
      }
    }
    
}