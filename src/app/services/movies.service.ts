import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Entry, ResponseData} from "../shared/models/responseData";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    searchValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    dateValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private http: HttpClient) {
    }

    private getMovies(): Observable<Entry[]> {
        return this.http.get<ResponseData>('https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json')
            .pipe(
                map((data: ResponseData) => {
                    return data.entries
                })
            )
    }

    getItems(type: string): Observable<Entry[]> {
        return this.getMovies()
            .pipe(
                map((items: Entry[]) => {
                    return items.filter((item: Entry) => {
                        return item.programType === type
                    })
                })
            )
    }

    setSearchValue(val: string): void {
        this.searchValue$.next(val)
    }

    setDateValue(val: string): void {
        this.dateValue$.next(val);
    }
}
