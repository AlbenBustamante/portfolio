import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppStore } from 'app/app.store';

@Component({
  selector: 'app-footer-copyright',
  imports: [DatePipe],
  templateUrl: './footer-copyright.component.html',
  styleUrl: './footer-copyright.component.css',
})
export class FooterCopyrightComponent {
  readonly store = inject(AppStore);
  readonly today = new Date();
}
