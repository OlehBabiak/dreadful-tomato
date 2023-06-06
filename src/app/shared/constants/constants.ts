import { HeaderNavItem } from '../models/header-nav-item';

export const NAV_ITEM: HeaderNavItem[] = [
  {
    routerLink: '/movies',
    title: 'Movies',
    icon: 'assets/icon-movies.png',
  },
  {
    routerLink: '/series',
    title: 'Series',
    icon: 'assets/icon-series.png',
  },
];

export const ITEM_TYPES: { movies: string; series: string } = {
  movies: 'movies',
  series: 'series',
};
