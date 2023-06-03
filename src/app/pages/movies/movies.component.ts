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
    movies$: Observable<Entry[]>
    itemType: string = ITEM_TYPES.movies

    constructor(public movieService: MoviesService) {
    }

    ngOnInit(): void {
        this.getItems()
    }

    private getItems() {
        this.movies$ = this.movieService.getItems(this.itemType)
    }
}
