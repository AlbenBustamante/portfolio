import { Component } from '@angular/core';

@Component({
  selector: 'svg[close-menu-icon]',
  imports: [],
  template: `
    <svg:path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  `,
  host: {
    '[attr.xmlsn]': '"http://www.w3.org/2000/svg"',
    '[attr.fill]': '"none"',
    '[attr.viewBox]': '"0 0 24 24"',
    '[attr.stroke-width]': '"1.5"',
    '[attr.stroke]': '"currentColor"',
  },
})
export class CloseMenuIconComponent {}
