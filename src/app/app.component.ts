import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AppStore],
})
export class AppComponent {
  private readonly _store = inject(AppStore);

  ngOnInit() {
    this._store.fetch();
  }
}
