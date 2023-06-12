import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {
  isCalendarOpen = false;
  calendar: string[] = ['All'];
  date = 'All';
  isFilterActive: boolean;

  constructor(
    public filterService: FilterService,
    public movieService: MoviesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createYearSelect();
    this.filterService.isCalendarOpen$.subscribe((val: boolean) => {
      this.isCalendarOpen = val;
      this.cdr.markForCheck();
    });
    this.movieService.dateValue$.subscribe((val: string) => (this.date = val));
    this.filterService.isFilterActive$.subscribe(
      (val: boolean) => (this.isFilterActive = val)
    );
  }

  private createYearSelect(): void {
    const currentYear: number = new Date().getFullYear();
    for (let year: number = currentYear; year >= 1950; year--) {
      this.calendar.push(year.toString());
    }
  }

  searchChange($event: Event): void {
    const searchValue: string = ($event.target as HTMLInputElement).value;
    this.movieService.setSearchValue(searchValue);
  }

  onCalendarOpen($event: Event): void {
    $event.stopPropagation();
    this.filterService.changeCalendarView(true);
  }

  onYearChoose($event: Event): void {
    $event.stopPropagation();
    const year: string = ($event.target as HTMLElement).innerText;
    this.movieService.setDateValue(year);
    this.filterService.changeCalendarView(false);
  }
}
