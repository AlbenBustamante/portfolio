import { Component } from '@angular/core';
import { InputComponent } from '../../../../../components/input/input.component';
import { TextareaComponent } from '../../../../../components/textarea/textarea.component';
import { ButtonComponent } from '../../../../../components/button/button.component';

@Component({
  selector: 'app-contact-form',
  imports: [InputComponent, TextareaComponent, ButtonComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {}
