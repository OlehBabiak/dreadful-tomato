import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageIndex: number;//current page
  @Input() totalPages: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  pages: number[] = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.totalPages)
    this.createPageItems()
  }

  private createPageItems(): void {
    for (let i: number = 1; i <= this.totalPages; i++) {
      this.pages.push(i)
    }
  }

  onNextPage(): void {
    if (this.pageIndex < this.totalPages) {
      this.pageChanged.emit(this.pageIndex + 1);
    }
  }

  onPreviousPage(): void {
    if (this.pageIndex > 1) {
      this.pageChanged.emit(this.pageIndex - 1);
    }
  }

  onPageSelect($event): void {
    const page: number = +($event.target as HTMLElement).innerText;
    this.pageChanged.emit(page);
  }
}
