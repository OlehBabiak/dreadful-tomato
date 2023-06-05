import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Entry} from "../../shared/models/responseData";
import {Observable} from "rxjs";
import {ITEM_TYPES} from "../../shared/constants/constants";

@Component({
    selector: 'app-series',
    templateUrl: './series.component.html',
    styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
    series$: Observable<Entry[]>
    itemType: string = ITEM_TYPES.series
    searchValue: string = '';
    dateValue: string = '';

    constructor(public movieService: MoviesService) {
    }

    ngOnInit(): void {
        this.getItems();
        this.getSearchValue();
        this.getDateValue()
    }

    private getSearchValue(): void {
        this.movieService.searchValue$.subscribe((value: string) => this.searchValue = value)
    }

    private getDateValue(): void {
        this.movieService.dateValue$.subscribe((value: string) => this.dateValue = value)
    }

    private getItems() {
        this.series$ = this.movieService.getItems(this.itemType)
    }
}
