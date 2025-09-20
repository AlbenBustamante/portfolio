import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [TranslateModule, RouterOutlet],
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
