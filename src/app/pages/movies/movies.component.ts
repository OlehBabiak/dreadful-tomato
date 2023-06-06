import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Observable} from "rxjs";
import {Entry} from "../../shared/models/responseData";
import {ITEM_TYPES} from "../../shared/constants/constants";
import {tap} from "rxjs/operators";
import {PaginationService} from "../../shared/components/pagination/pagination.service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    movies$: Observable<Entry[]>;
    itemType: string = ITEM_TYPES.movies;
    pageSize: number = 5;
    pageIndex: number = 0;
    searchValue: string = '';
    dateValue: string = '';

    constructor(private movieService: MoviesService, private paginationService: PaginationService) {
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
        this.movies$ = this.movieService.getItems(this.itemType).pipe(
            tap((val: Entry[]) => {
                if(val.length % this.pageSize === 0) {
                    this.paginationService.setTotalPagesAmount(Math.floor(val.length / this.pageSize))
                } else {
                    this.paginationService.setTotalPagesAmount(Math.ceil(val.length / this.pageSize))
                }
                return val;
            })
        );
    }

    onPageChange($event: number) {
        this.pageIndex = $event
    }
}
