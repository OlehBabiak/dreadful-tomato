import { ChangeDetectorRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isCalendarOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  isFilterActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private cdr: ChangeDetectorRef;

  changeCalendarView(state: boolean): void {
    this.isCalendarOpen$.next(state);
  }

  changeFilterView(state: boolean): void {
    this.isFilterActive$.next(state);
    this.cdr.markForCheck();
  }
}
