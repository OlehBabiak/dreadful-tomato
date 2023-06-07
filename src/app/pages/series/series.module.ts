import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from './series.component';

@NgModule({
  declarations: [SeriesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: SeriesComponent }]),
  ],
})
export class SeriesModule {}
