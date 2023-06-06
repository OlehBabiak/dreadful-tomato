import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {Entry} from "../../shared/models/responseData";
import {Observable} from "rxjs";
import {ITEM_TYPES} from "../../shared/constants/constants";
import {PaginationService} from "../../shared/components/pagination/pagination.service";

@Component({
    selector: 'app-series',
    templateUrl: './series.component.html',
    styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
    series$: Observable<Entry[]>;
    itemType: string = ITEM_TYPES.series;
    pageSize: number = 5;
    pageIndex: number = 0;
    searchValue: string = '';
    dateValue: string = '';

    constructor(private movieService: MoviesService) {
    }

    ngOnInit(): void {
        // this.getItems();
        this.getSearchValue();
        this.getDateValue();
    }

    private getSearchValue(): void {
        this.movieService.searchValue$.subscribe((value: string) => this.searchValue = value)
    }

    private getDateValue(): void {
        this.movieService.dateValue$.subscribe((value: string) => this.dateValue = value)
    }

    // private getItems() {
    //     this.series$ = this.movieService.getItems(this.itemType).pipe(
    //         tap((val: Entry[]) => {
    //             if(val.length % this.pageSize === 0) {
    //                 this.paginationService.setTotalPagesAmount(Math.floor(val.length / this.pageSize))
    //             } else {
    //                 this.paginationService.setTotalPagesAmount(Math.ceil(val.length / this.pageSize))
    //             }
    //             return val;
    //         })
    //     );
    // }
    //
    // onPageChange($event: number) {
    //     this.pageIndex = $event
    // }
}
