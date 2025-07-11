import { Component } from '@angular/core';

@Component({
  selector: 'svg[open-menu-icon]',
  imports: [],
  template: `
    <svg:path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
export class OpenMenuIconComponent {}
