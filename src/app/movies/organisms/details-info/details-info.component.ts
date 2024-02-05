import { Component, Input } from '@angular/core';
import { ResultDetailLocal } from '@moviesModels/movies.types';

@Component({
  selector: 'movies-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.sass'],
})
export class DetailsInfoComponent {
  @Input() movie: ResultDetailLocal = {
    backdrop_path: '',
    budget: 0,
    genres: [],
    id: 0,
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    status: '',
    tagline: '',
    title: '',
    vote_average: 0,
    vote_count: 0,
  };
}
