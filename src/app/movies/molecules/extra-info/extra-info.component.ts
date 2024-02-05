import { Component, Input } from '@angular/core';
import { ResultDetailLocal } from '@moviesModels/movies.types';

@Component({
  selector: 'movies-extra-info',
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.sass'],
})
export class ExtraInfoComponent {
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
