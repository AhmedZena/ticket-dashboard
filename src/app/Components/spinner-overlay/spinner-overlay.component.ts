import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//<mat-spinner diameter="80" color="accent"></mat-spinner>
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-spinner-overlay',
  standalone: true,
  imports: [ProgressSpinnerModule, CommonModule],
  templateUrl: './spinner-overlay.component.html',
  styleUrl: './spinner-overlay.component.scss',
})
export class SpinnerOverlayComponent {}
