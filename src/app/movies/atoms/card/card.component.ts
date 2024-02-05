import { Component, Input } from '@angular/core';
import { ResultLocal } from '@moviesModels/movies.types';

@Component({
  selector: 'movies-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input() movie: ResultLocal = {
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: 0,
    vote_count: 0,
  };
}
