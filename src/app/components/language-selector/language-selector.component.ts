import { NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';

interface Language {
  flag: string;
  label: string;
}

@Component({
  selector: 'app-language-selector',
  imports: [NgClass],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  readonly adjust = input.required<boolean>();
  readonly showLanguages = signal<boolean>(false);
  readonly languages: Language[] = [
    { flag: '🇺🇸', label: 'en' },
    { flag: '🇻🇪', label: 'es' },
  ];
  readonly selectedLanguage = signal<Language>(this.languages[0]);

  flag(language: Language) {
    return language.flag;
  }

  label(language: Language) {
    return language.label.toUpperCase();
  }

  onSelect(language: Language) {
    this.selectedLanguage.set(language);
    this.showLanguages.set(false);
  }
}
