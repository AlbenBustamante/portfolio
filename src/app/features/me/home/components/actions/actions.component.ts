import { Component, input } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-actions',
  imports: [ButtonComponent],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css',
})
export class ActionsComponent {
  readonly viewCV = input.required<string | undefined>();
  readonly aboutMe = input.required<string | undefined>();
}
