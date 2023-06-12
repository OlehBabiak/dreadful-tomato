import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input() pageIndex: number;
  // @Input() totalPages$: BehaviorSubject<number>;
  @Input() totalPages: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalPages) {
      const currentValue = changes.totalPages.currentValue;
      this.createPageItems(currentValue);
    }
  }

  private createPageItems(val): void {
    for (let i = 1; i <= val; i++) {
      this.pages.push(i);
    }
  }

  onNextPage(): void {
    if (this.pageIndex + 1 < this.totalPages) {
      this.pageChanged.emit(this.pageIndex + 1);
    }
  }

  onPreviousPage(): void {
    if (this.pageIndex + 1 > 1) {
      this.pageChanged.emit(this.pageIndex - 1);
    }
  }

  onPageSelect($event: Event): void {
    const page: number = +($event.target as HTMLElement).innerText;
    this.pageChanged.emit(page - 1);
  }
}
