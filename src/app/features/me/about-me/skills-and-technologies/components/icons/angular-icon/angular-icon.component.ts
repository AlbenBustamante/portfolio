import { Component } from '@angular/core';

@Component({
  selector: 'svg[angular-icon]',
  imports: [],
  template: `
    <svg:linearGradient
      id="a"
      x1="14.704"
      x2="110.985"
      y1="46.27"
      y2="92.024"
      gradientTransform="matrix(1 0 0 -1 0 130)"
      gradientUnits="userSpaceOnUse"
    >
      <svg:stop offset="0" stop-color="#e40035"></svg:stop>
      <svg:stop offset=".24" stop-color="#f60a48"></svg:stop>
      <svg:stop offset=".352" stop-color="#f20755"></svg:stop>
      <svg:stop offset=".494" stop-color="#dc087d"></svg:stop>
      <svg:stop offset=".745" stop-color="#9717e7"></svg:stop>
      <svg:stop offset="1" stop-color="#6c00f5"></svg:stop>
    </svg:linearGradient>
    <svg:path
      fill="url(#a)"
      d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"
    ></svg:path>
    <svg:linearGradient
      id="b"
      x1="28.733"
      x2="91.742"
      y1="117.071"
      y2="45.195"
      gradientTransform="matrix(1 0 0 -1 0 130)"
      gradientUnits="userSpaceOnUse"
    >
      <svg:stop offset="0" stop-color="#ff31d9"></svg:stop>
      <svg:stop offset="1" stop-color="#ff5be1" stop-opacity="0"></svg:stop>
    </svg:linearGradient>
    <svg:path
      fill="url(#b)"
      d="m124.5 21.3-4.4 68.6L78.3 0l46.2 21.3zm-29 88.7L64 128l-31.5-18 6.4-15.5h50.3l6.3 15.5zM64 34.1l16.5 40.2h-33L64 34.1zM7.9 89.9 3.5 21.3 49.7 0 7.9 89.9z"
    ></svg:path>
  `,
  host: {
    '[attr.viewBox]': 'viewBox',
    '[attr.xmlns]': 'xmlns',
  },
})
export class AngularIconComponent {
  readonly viewBox = '0 0 128 128';
  readonly xmlns = 'http://www.w3.org/2000/svg';
}
