// import { ApexChartComponent } from './Components/apex-chart/apex-chart.component';
import { CommonModule } from '@angular/common';
// import { TicketComponent } from './Components/ticket/ticket.component';
import { RouterOutlet } from '@angular/router';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  NoopAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';

import { SpinnerOverlayComponent } from './Components/spinner-overlay/spinner-overlay.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    SpinnerOverlayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideAnimations(), NoopAnimationsModule],
})
export class AppComponent implements OnInit {
  title = 'ticket-dashboard';

  showSpinner: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.showSpinner = false;
      this.cdRef.detectChanges(); // Trigger change detection
    }, 2000);
  }
}
