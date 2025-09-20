import { Component } from '@angular/core';
import { LandingSectionContainerComponent } from '../components/landing-section-container/landing-section-container.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  imports: [LandingSectionContainerComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
