import { Component, OnInit } from '@angular/core';
import { HeaderNavItem } from '../../models/header-nav-item';
import { NAV_ITEM } from '../../constants/constants'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems: HeaderNavItem[] = NAV_ITEM;

  constructor() { }

  ngOnInit(): void {
  }

}
