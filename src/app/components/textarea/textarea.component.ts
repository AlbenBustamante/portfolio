import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) label!: string;
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl('');
  @Input() autocomplete: 'name' | 'email' | 'off' = 'off';
}
