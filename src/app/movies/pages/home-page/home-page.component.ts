import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '@moviesService/movies.service';
import {
  MovieType,
  ReleaseDateFilter,
  ResultLocal,
} from '@moviesModels/movies.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  popularMovies: ResultLocal[] = [];
  topRatedMovies: ResultLocal[] = [];
  upcomingMovies: ResultLocal[] = [];

  popularMovies$?: Subscription;
  topRatedMovies$?: Subscription;
  upcomingMovies$?: Subscription;

  moviesFilter: ReleaseDateFilter = {
    isActive: false,
    name: '',
    release_date_gte: '',
  };

  constructor(private _moviesService: MoviesService) {}

  ngOnDestroy(): void {
    this.popularMovies$?.unsubscribe();

    this.topRatedMovies$?.unsubscribe();

    this.upcomingMovies$?.unsubscribe();
  }

  ngOnInit(): void {
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  getPopularMovies(releaseDateGte?: string): void {
    this._moviesService.getMovies('popular', 1, releaseDateGte).subscribe({
      next: (popularMovies) => {
        this.popularMovies = popularMovies.results;
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  handleReleaseFilter(filter: ReleaseDateFilter, sliderName: MovieType): void {
    const filterCopy: ReleaseDateFilter = {
      isActive: filter.isActive,
      name: filter.name,
      release_date_gte: filter.release_date_gte,
    };

    if (sliderName === 'popular') {
      this.getPopularMovies(filterCopy.release_date_gte);
    } else if (sliderName === 'top_rated') {
      this.getTopRatedMovies(filterCopy.release_date_gte);
    } else if (sliderName === 'upcoming') {
      this.getUpcomingMovies(filterCopy.release_date_gte);
    }
  }

  getTopRatedMovies(releaseDateGte?: string): void {
    this._moviesService.getMovies('top_rated', 1, releaseDateGte).subscribe({
      next: (topRatedMovies) => {
        this.topRatedMovies = topRatedMovies.results;
      },

      error: (err) => {
        console.error(err);
      },
    });
  }

  getUpcomingMovies(releaseDateGte?: string): void {
    this._moviesService.getMovies('upcoming', 1, releaseDateGte).subscribe({
      next: (upcomingMovies) => {
        this.upcomingMovies = upcomingMovies.results;
      },

      error: (err) => {
        console.error(err);
      },
    });
  }
}
