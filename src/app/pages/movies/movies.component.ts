import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, Subscription } from 'rxjs';
import { Entry } from '../../shared/models/responseData';
import { ITEM_TYPES } from '../../shared/constants/constants';
import { map } from 'rxjs/operators';
import { AutoUnsubscribe } from '../../shared/utils/decorators';

@AutoUnsubscribe('getSearchValueSubs')
@AutoUnsubscribe('getDateValueSubs')
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesComponent implements OnInit {
  private getSearchValueSubs: Subscription = new Subscription();
  private getDateValueSubs: Subscription = new Subscription();
  movies$: Observable<Entry[]>;
  totalPages = 0;
  itemType: string = ITEM_TYPES.movies;
  pageSize = 8;
  pageIndex = 0;
  searchValue = '';
  dateValue = '';

  constructor(
    private movieService: MoviesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getItems();
    this.getSearchValue();
    this.getDateValue();
  }

  private getSearchValue(): void {
    this.getSearchValueSubs.add(
      this.movieService.searchValue$.subscribe((value: string): void => {
        this.searchValue = value;
        this.cdr.markForCheck();
      })
    );
  }

  private getDateValue(): void {
    this.getDateValueSubs.add(
      this.movieService.dateValue$.subscribe((value: string): void => {
        this.dateValue = value;
        this.cdr.markForCheck();
      })
    );
  }

  private getItems(): void {
    this.movies$ = this.movieService.getItems(this.itemType).pipe(
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
