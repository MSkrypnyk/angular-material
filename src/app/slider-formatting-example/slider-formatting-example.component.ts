import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-formatting-example',
  templateUrl: './slider-formatting-example.component.html',
  styleUrl: './slider-formatting-example.component.scss'
})
export class SliderFormattingExampleComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
