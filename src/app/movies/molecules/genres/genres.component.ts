import { Component, Input } from '@angular/core';
import { Genre } from '@moviesModels/movies.types';

@Component({
  selector: 'movies-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.sass'],
})
export class GenresComponent {
  @Input() genres: Genre[] = [];
}
