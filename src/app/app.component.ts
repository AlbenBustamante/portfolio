import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AccessibilityComponent } from './components/accessibility/accessibility.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    TranslateModule,
    NavbarComponent,
    RouterOutlet,
    AccessibilityComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly _translate: TranslateService) {
    this._translate.addLangs(['es', 'en']);
    this._translate.setDefaultLang('es');
    this._translate.use(this._translate.getBrowserLang() || 'es');
  }
}
