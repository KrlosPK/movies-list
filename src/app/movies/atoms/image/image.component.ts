import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass'],
})
export class ImageComponent {
  @Input() alt: string = '';
  @Input() height: number = 0;
  @Input() src: string = '';
  @Input() width: number = 0;
}
