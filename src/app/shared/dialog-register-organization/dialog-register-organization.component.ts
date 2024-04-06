import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-dialog-register-organization',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule,MatButtonModule, MatInputModule,MatCardModule, NgIf, MatIcon,MatDialogContent],
  templateUrl: './dialog-register-organization.component.html',
  styleUrl: './dialog-register-organization.component.css'
})

export class DialogRegisterOrganizationComponent {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogRegisterOrganizationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    organizationName: ['', Validators.required],
    phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^\d{10}$/)])]
  });

  
  
  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  
}