import { Component, EventEmitter, Output } from '@angular/core';
import { ReleaseDateFilter } from '@moviesModels/movies.types';
import {
  firstDayOfMonth,
  firstDayOfWeek,
  firstDayOfYear,
  thisMonth,
  thisWeek,
  thisYear,
} from '@utils/utils';

@Component({
  selector: 'movies-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass'],
})
export class FiltersComponent {
  public moviesFilters: ReleaseDateFilter[] = [
    {
      isActive: true,
      name: thisWeek,
      release_date_gte: firstDayOfWeek.toISOString(), // Convertir a formato ISO
    },
    {
      isActive: false,
      name: thisMonth,
      release_date_gte: firstDayOfMonth.toISOString(),
    },
    {
      isActive: false,
      name: thisYear,
      release_date_gte: firstDayOfYear.toISOString(),
    },
  ];

  @Output() moviesFilter = new EventEmitter<ReleaseDateFilter>();

  handleReleaseFilter(filter: ReleaseDateFilter): void {
    if (filter.isActive) return;

    this.moviesFilters.forEach((item) => {
      item.isActive = false;
    });

    filter.isActive = true;
    this.moviesFilter.emit(filter);
  }
}
