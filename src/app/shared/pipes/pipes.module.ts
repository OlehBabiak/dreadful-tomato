import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pagination/pagination.pipe';
import { SearchPipe } from './search/search.pipe';
import { GetDatePipe } from './getDate/get-date.pipe';



@NgModule({
  declarations: [
    PaginationPipe,
    SearchPipe,
    GetDatePipe
  ],
    exports: [
        SearchPipe,
        GetDatePipe,
        PaginationPipe
    ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
