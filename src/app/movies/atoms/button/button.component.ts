import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent {
  @Input() buttonTitle: string = '';
  @Input() isActive: boolean = false;
}
