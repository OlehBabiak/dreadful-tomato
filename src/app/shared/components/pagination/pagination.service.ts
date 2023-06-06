import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaginationService {

    totalPages$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor() {
    }

    setTotalPagesAmount(val: number) {
        this.totalPages$.next(val)
    }
}
