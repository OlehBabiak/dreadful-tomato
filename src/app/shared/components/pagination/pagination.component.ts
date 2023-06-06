import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaginationService} from "./pagination.service";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageIndex: number;//current page
  totalPages: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  pages: number[] = []

  constructor(private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.paginationService.totalPages$.subscribe(value => {
      this.totalPages = value;
      this.createPageItems(value)
    })
  }

  private createPageItems(val): void {
    for (let i: number = 1; i <= val; i++) {
      this.pages.push(i)
    }
  }

  onNextPage(): void {
    if (this.pageIndex+1 < this.totalPages) {
      this.pageChanged.emit(this.pageIndex + 1);
    }
  }

  onPreviousPage(): void {
    if (this.pageIndex+1 > 1) {
      this.pageChanged.emit(this.pageIndex - 1);
    }
  }

  onPageSelect($event): void {
    const page: number = +($event.target as HTMLElement).innerText;
    this.pageChanged.emit(page - 1);
  }
}
