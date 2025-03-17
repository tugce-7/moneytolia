import { Component } from '@angular/core';
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
  constructor(
    private authService: AuthService,
    private router: Router) {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
