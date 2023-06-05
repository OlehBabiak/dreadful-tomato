import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Observable} from "rxjs";
import {Entry} from "../../shared/models/responseData";
import {ITEM_TYPES} from "../../shared/constants/constants";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies$: Observable<Entry[]>;
    itemType: string = ITEM_TYPES.movies;
    pageSizeOptions = [10, 20, 60, 100];
    length = 0;
    pageSize = this.pageSizeOptions[0];
    pageIndex = 0;
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

    private getItems(): void {
        this.movies$ = this.movieService.getItems(this.itemType)
    }
}
