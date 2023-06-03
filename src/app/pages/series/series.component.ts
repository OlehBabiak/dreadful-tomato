import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Entry} from "../../shared/models/responseData";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";
import {ITEM_TYPES} from "../../shared/constants/constants";

@Component({
    selector: 'app-series',
    templateUrl: './series.component.html',
    styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
    series$: Observable<Entry[]>
    itemType: string = ITEM_TYPES.series

    constructor(public movieService: MoviesService) {
    }

    ngOnInit(): void {
        this.getItems()
    }

    private getItems() {
        this.series$ = this.movieService.getItems(this.itemType)
    }
}
