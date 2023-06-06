import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../../models/responseData';

@Pipe({
  name: 'getDate',
})
export class GetDatePipe implements PipeTransform {
  transform(products: Entry[], args: string): Entry[] {
    if (args === 'All') {
      return products;
    }

    if (products && args) {
      return products.filter((entry: Entry): boolean => {
        return entry.releaseYear.toString() === args;
      });
    }
    return products;
  }
}
