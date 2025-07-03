import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { MainContainerComponent } from '../../components/main-container/main-container.component';

@Component({
  selector: 'app-home',
  imports: [MainContainerComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  alert() {
    alert('jkfdjksf');
  }
}
