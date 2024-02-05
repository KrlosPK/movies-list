import { Component } from '@angular/core';
import { NavLink } from '@sharedModels/shared.types';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  imagesAspectRatio: number = 28;
  navLinks: NavLink[] = [
    {
      icon: 'home',
      name: 'Inicio',
      path: '/movies/home',
    },
    {
      icon: 'heart',
      name: 'Favoritos',
      path: '/movies/favorites',
    },
    {
      icon: 'search',
      name: 'Buscar',
      path: '/movies/search',
    },
  ];
}
