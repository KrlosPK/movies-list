import { Component, Input } from '@angular/core';

@Component({
  selector: 'movies-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass'],
})
export class BreadcrumbComponent {
  @Input() links: string[] = [];
}
