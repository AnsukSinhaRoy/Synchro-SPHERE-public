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
    private http: HttpClient
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
    
        // Simulate API call with 3-second delay
        setTimeout(() => {
          this.isLoading = false; // Stop loading after 3 seconds
          this.dialogRef.close(formData); // Close dialog with form data
        }, 3000);
      }
    }
}