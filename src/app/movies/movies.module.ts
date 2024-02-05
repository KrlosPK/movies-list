import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from './atoms/button/button.component';
import { CardComponent } from './atoms/card/card.component';
import { ContainerComponent } from './molecules/container/container.component';
import { FavoriteMoviesPageComponent } from './pages/favorite-movies-page/favorite-movies-page.component';
import { FiltersComponent } from './molecules/filters/filters.component';
import { HeaderComponent } from './molecules/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';
import { PagesTemplateComponent } from './templates/pages-template/pages-template.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SliderComponent } from './organisms/slider/slider.component';
import { BreadcrumbComponent } from './molecules/breadcrumb/breadcrumb.component';
import { GenresComponent } from './molecules/genres/genres.component';
import { ImageComponent } from './atoms/image/image.component';
import { DetailsInfoComponent } from './organisms/details-info/details-info.component';
import { FormatLinkPipe } from './pipes/format-link.pipe';
import { VotesComponent } from './molecules/votes/votes.component';
import { ExtraInfoComponent } from './molecules/extra-info/extra-info.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    ContainerComponent,
    FavoriteMoviesPageComponent,
    FiltersComponent,
    HeaderComponent,
    HomePageComponent,
    MovieDetailsPageComponent,
    PagesTemplateComponent,
    SearchPageComponent,
    SliderComponent,
    BreadcrumbComponent,
    GenresComponent,
    ImageComponent,
    DetailsInfoComponent,
    FormatLinkPipe,
    VotesComponent,
    ExtraInfoComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, HttpClientModule, SharedModule],
})
export class MoviesModule {}
