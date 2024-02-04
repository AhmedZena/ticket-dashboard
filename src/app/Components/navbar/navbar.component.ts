import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
// p-menu import {}
// import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'الرئيسية',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'التذكرة',
        icon: 'pi pi-fw pi-ticket',
        // routerLink: ['/ticket'],
      },
      {
        label: 'التحليلات',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ['/ticket-analytics'],
      },
    ];
  }
}
