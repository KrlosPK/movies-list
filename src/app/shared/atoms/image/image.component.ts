import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-image',
  templateUrl: './image.component.html',
  styles: [],
})
export class ImageComponent {
  @Input() height: string = '';
  @Input() icon: string = '';
  @Input() width: string = '';
}
