import { Component, OnInit } from '@angular/core';
import { HeaderNavItem } from '../../models/header-nav-item';
import { NAV_ITEM } from '../../constants/constants';
import { NavigationEnd, Router } from '@angular/router';
import { FilterService } from '../filters/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems: HeaderNavItem[] = NAV_ITEM;
  currentRoute: string;
  isFilterActive: boolean = true;

  constructor(public router: Router, public filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.isFilterActive$.subscribe(
      (value: boolean) => (this.isFilterActive = value)
    );
    this.router.events.subscribe((event: NavigationEnd): void => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  onFilterVisibleToggle(): void {
    this.filterService.changeFilterView(!this.isFilterActive);
  }
}
