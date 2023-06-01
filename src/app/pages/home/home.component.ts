import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    active: string = 'Movies'

    constructor() {
    }

    ngOnInit(): void {
    }

    onActiveToggle(value: string): void {
        if (this.active === 'Movies') {
            this.active = value
        } else {
            this.active = value
        }
    }
}
