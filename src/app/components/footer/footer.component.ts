import { Component } from '@angular/core';
import { FooterHeaderComponent } from '@components/footer-header/footer-header.component';
import { FooterNavigationComponent } from '@components/footer-navigation/footer-navigation.component';
import { FooterContactComponent } from '@components/footer-contact/footer-contact.component';
import { FooterCopyrightComponent } from '@components/footer-copyright/footer-copyright.component';

@Component({
  selector: 'app-footer',
  imports: [
    FooterHeaderComponent,
    FooterNavigationComponent,
    FooterContactComponent,
    FooterCopyrightComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
