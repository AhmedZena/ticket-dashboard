import { Routes } from '@angular/router';
import { TicketComponent } from './Components/ticket/ticket.component';
import { TicketAnalyticsComponent } from './Screens/ticket-analytics/ticket-analytics.component';
export const routes: Routes = [
  { path: 'ticket', component: TicketComponent },
  { path: 'ticket-analytics', component: TicketAnalyticsComponent },
  { path: '', redirectTo: '/ticket-analytics', pathMatch: 'full' },
  { path: '**', redirectTo: '/ticket-analytics', pathMatch: 'full' },
];
