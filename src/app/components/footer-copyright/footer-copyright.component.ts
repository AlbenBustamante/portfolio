import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-copyright',
  imports: [DatePipe],
  templateUrl: './footer-copyright.component.html',
  styleUrl: './footer-copyright.component.css',
})
export class FooterCopyrightComponent {
  readonly today = new Date();
}
