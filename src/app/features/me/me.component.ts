import { Component } from '@angular/core';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';

@Component({
  selector: 'app-me',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './me.component.html',
  styleUrl: './me.component.css',
})
export default class MeComponent {}
