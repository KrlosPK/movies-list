import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReleaseDateFilter, ResultLocal } from '@moviesModels/movies.types';

@Component({
  selector: 'movies-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass'],
})
export class SliderComponent {
  @Input() sliderTitle: string = '';
  @Input() moviesList: ResultLocal[] = [];
  @Input() moviesFilters!: ReleaseDateFilter;
  @Output() moviesFilter = new EventEmitter<ReleaseDateFilter>();

  handleReleaseFilter(filter: ReleaseDateFilter): void {
    this.moviesFilters = filter;
    this.moviesFilter.emit(filter);
  }
}
