import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps/steps.component';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [
    CommonModule,
    StepsComponent
  ],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}
