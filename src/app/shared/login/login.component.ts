import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginPageDataService } from '../../services/login-page-data.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatIconModule, MatSlideToggleModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private _loginPagedataservice: LoginPageDataService,public dialogRef: MatDialogRef<LoginComponent> ) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [false]
  });

  password: string = '';
  showPassword: boolean = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this._loginPagedataservice.initializeUserData();
      this.dialogRef.close(this._loginPagedataservice.getUserData()); // Close the dialog and pass the user data
    }
  }
}
