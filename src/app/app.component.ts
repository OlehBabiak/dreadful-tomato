import { Component } from '@angular/core';
import { FilterService } from './shared/components/filters/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'dreadful-tomato';

  constructor(public filterService: FilterService) {}

  onCalendarOpen(): void {
    this.filterService.changeCalendarView(false);
  }
}
