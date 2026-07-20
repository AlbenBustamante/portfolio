import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { Lang } from '@core/models/lang.model';
import { AppStore } from 'app/app.store';

@Component({
  selector: 'app-language-selector',
  imports: [NgClass],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  readonly adjust = input.required<boolean>();
  readonly showLanguages = signal<boolean>(false);

  readonly languages: Lang[] = [
    { flag: '🇺🇸', label: 'en' },
    { flag: '🇻🇪', label: 'es' },
  ];

  readonly store = inject(AppStore);

  ngOnInit() {
    this.store.setLanguage(this.languages[0]);
  }

  flag(language: Lang) {
    return language.flag;
  }

  label(language: Lang) {
    return language.label.toUpperCase();
  }

  onSelect(language: Lang) {
    this.store.setLanguage(language);
    this.showLanguages.set(false);
  }
}
