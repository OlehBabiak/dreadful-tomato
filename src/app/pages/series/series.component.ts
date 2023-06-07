import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Entry } from '../../shared/models/responseData';
import { Observable, Subscription } from 'rxjs';
import { ITEM_TYPES } from '../../shared/constants/constants';
import { map } from 'rxjs/operators';
import { AutoUnsubscribe } from '../../shared/utils/decorators';

@AutoUnsubscribe('getSearchValueSubs')
@AutoUnsubscribe('getDateValueSubs')
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent implements OnInit {
  private getSearchValueSubs: Subscription = new Subscription();
  private getDateValueSubs: Subscription = new Subscription();
  series$: Observable<Entry[]>;
  totalPages = 0;
  itemType: string = ITEM_TYPES.series;
  pageSize = 8;
  pageIndex = 0;
  searchValue = '';
  dateValue = '';

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getItems();
    this.getSearchValue();
    this.getDateValue();
  }

  private getSearchValue(): void {
    this.getSearchValueSubs.add(
      this.movieService.searchValue$.subscribe(
        (value: string) => (this.searchValue = value)
      )
    );
  }

  private getDateValue(): void {
    this.getDateValueSubs.add(
      this.movieService.dateValue$.subscribe(
        (value: string) => (this.dateValue = value)
      )
    );
  }

  private getItems(): void {
    this.series$ = this.movieService.getItems(this.itemType).pipe(
      map((val: Entry[]) => {
        if (val.length % this.pageSize === 0) {
          this.totalPages = Math.floor(val.length / this.pageSize);
        } else {
          this.totalPages = Math.ceil(val.length / this.pageSize);
        }
        return val;
      })
    );
  }

  onPageChange($event: number): void {
    this.pageIndex = $event;
  }
}
