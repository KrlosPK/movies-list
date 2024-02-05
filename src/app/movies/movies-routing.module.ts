import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteMoviesPageComponent } from './pages/favorite-movies-page/favorite-movies-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'details/:movieId',
    component: MovieDetailsPageComponent,
  },
  {
    path: 'favorites',
    component: FavoriteMoviesPageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
