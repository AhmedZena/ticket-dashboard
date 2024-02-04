import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup, ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [
    TooltipModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    QRCodeModule,
    ConfirmPopupModule,
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class TicketComponent {
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  link = 'www.tazkty.com/5';
  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

  copyLink() {
    navigator.clipboard
      .writeText(this.link)
      .then(() => {
        // Success message or logic
        console.log('Link copied to clipboard');
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });

    this.messageService.add({
      severity: 'info',
      summary: ' نسخ الرابط',
      detail: 'تم نسخ الرابط بنجاح',
    });
  }

  shareTicket() {
    // show toast
    this.messageService.add({
      severity: 'info',
      summary: 'Ticket Shared',
      detail: 'Ticket shared successfully',
    });
  }

  accept() {
    this.confirmPopup.accept();
  }

  reject() {
    this.confirmPopup.reject();
  }

  delete(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure? You cannot undo this.',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 500,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 500,
        });
      },
    });
  }
}
