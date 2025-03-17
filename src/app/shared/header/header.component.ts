import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { SidebarElementsComponent } from '../sidebar/sidebar-elements/sidebar-elements.component';

@Component({
  selector: 'app-header',
  imports: [SidebarElementsComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() { }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
