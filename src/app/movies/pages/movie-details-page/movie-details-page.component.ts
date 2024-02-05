import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '@moviesService/movies.service';
import { ResultDetailLocal } from '@moviesModels/movies.types';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.sass'],
})
export class MovieDetailsPageComponent implements OnInit, OnDestroy {
  movie: ResultDetailLocal = {
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
  links: string[] = [];
  movieId: number = 0;

  getPopularMovies$?: Subscription;
  route$?: Subscription;

  constructor(
    private _moviesService: MoviesService,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnDestroy(): void {
    this.route$?.unsubscribe();

    this.getPopularMovies$?.unsubscribe();
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.getParamsId();

    this.getMovieDetails(this.movieId);
  }

  getParamsId(): void {
    this.route$ = this.route.params.subscribe((params) => {
      const movieId = params['movieId'].split(':')[0];

      this.movieId = movieId;
    });
  }

  getMovieDetails(movieId: number): void {
    this._moviesService.getMovieById(movieId).subscribe({
      next: (movieDetails) => {
        this.links = [
          `${movieDetails.id}:${movieDetails.title.split(' ').join('_')}`,
        ];

        this.titleService.setTitle(`${movieDetails.title} | CINELISTER`);

        this.movie = movieDetails;
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
