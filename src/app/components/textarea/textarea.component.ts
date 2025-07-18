import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-textarea',
  imports: [TranslatePipe, ReactiveFormsModule],
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
