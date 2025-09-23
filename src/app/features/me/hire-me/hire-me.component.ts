import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-hire-me',
  imports: [FormComponent, TitleComponent],
  templateUrl: './hire-me.component.html',
  styleUrl: './hire-me.component.css',
})
export default class HireMeComponent {}
