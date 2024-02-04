import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TicketComponent } from '../../Components/ticket/ticket.component';
import { ApexChartComponent } from '../../Components/apex-chart/apex-chart.component';
import { PrimengTableComponent } from '../../Components/primeng-table/primeng-table.component';
// p-button
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../Components/navbar/navbar.component';
import { SpinnerOverlayComponent } from '../../Components/spinner-overlay/spinner-overlay.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ticket-analytics',
  standalone: true,
  imports: [
    TicketComponent,
    ApexChartComponent,
    PrimengTableComponent,
    ButtonModule,
    NavbarComponent,
    SpinnerOverlayComponent,
    CommonModule,
  ],

  templateUrl: './ticket-analytics.component.html',
  styleUrl: './ticket-analytics.component.scss',
})
export class TicketAnalyticsComponent {}
