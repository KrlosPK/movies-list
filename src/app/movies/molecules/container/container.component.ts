import { Component, Input } from '@angular/core';
import { ResultLocal } from '@moviesModels/movies.types';

@Component({
  selector: 'movies-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass'],
})
export class ContainerComponent {
  @Input() moviesList: ResultLocal[] = [];
}
