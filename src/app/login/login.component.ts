import { Component, inject } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (this.authService.login(username!, password!)) {
      this.router.navigate(['/campaigns']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Giriş Başarısız!',
        text: 'Kullanıcı adı veya şifre hatalı.',
        confirmButtonText: 'Tamam',
        confirmButtonColor: '#d33',
        timer: 2000,
      });
    }
  }
}
