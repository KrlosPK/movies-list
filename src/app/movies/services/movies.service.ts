import { environment } from 'src/environments/environments.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MoviesList,
  MoviesResponseLocal,
  MovieType,
  Result,
  ResultDetail,
  ResultDetailLocal,
  ResultLocal,
} from '@moviesModels/movies.types';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public apiKey = environment.apiKey;
  public accessToken = environment.accessToken;
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getMovies(
    type: MovieType,
    currentPage: number = 1,
    releaseDateGte?: string,
    releaseDateLte?: string
  ): Observable<MoviesResponseLocal> {
    const params = new HttpParams()
      .set('language', 'es-MX')
      .set('page', currentPage)
      .set('release_date.gte', releaseDateGte || '')
      .set('release_date.lte', releaseDateLte || '');

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      params,
    };

    return this.http
      .get<MoviesList>(`${this.baseUrl}/movie/${type}`, options)
      .pipe(
        map((movies) => {
          const { total_pages, total_results, page, results } = movies;

          return {
            page,
            results: results.map((movie) => this.formatMovieData(movie)),
            total_pages,
            total_results,
          };
        })
      );
  }

  public getMovieById(movieId: number): Observable<ResultDetailLocal> {
    const params = new HttpParams().set('language', 'es-MX');

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${this.accessToken}`,
      },
      params,
    };

    return this.http
      .get<ResultDetail>(`${this.baseUrl}/movie/${movieId}`, options)
      .pipe(map((movie) => this.formatMovieDetailData(movie)));
  }

  public formatMovieData(movie: Result): ResultLocal {
    const {
      backdrop_path,
      genre_ids,
      id,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count,
    } = movie;

    return {
      backdrop_path,
      genre_ids,
      id,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count,
    };
  }

  public formatMovieDetailData(movie: ResultDetail): ResultDetailLocal {
    const {
      backdrop_path,
      id,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count,
      budget,
      genres,
      revenue,
      runtime,
      status,
      tagline,
    } = movie;

    return {
      backdrop_path,
      id,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      vote_average,
      vote_count,
      budget,
      genres,
      revenue,
      runtime,
      status,
      tagline,
    };
  }
}
