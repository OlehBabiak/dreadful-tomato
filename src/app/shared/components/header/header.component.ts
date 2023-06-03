import {Component, OnInit} from '@angular/core';
import {HeaderNavItem} from '../../models/header-nav-item';
import {NAV_ITEM} from '../../constants/constants'
import {ActivatedRoute, Data, NavigationEnd, Params, Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    navItems: HeaderNavItem[] = NAV_ITEM;
    currentRoute: string;


    constructor(public router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((event: NavigationEnd) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
            }
        });

    }

}
