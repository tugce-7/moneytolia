import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarElementsComponent } from './sidebar-elements/sidebar-elements.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    SidebarElementsComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
