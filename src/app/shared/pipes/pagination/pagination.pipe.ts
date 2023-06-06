import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../../models/responseData';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  transform(entries: Entry[], ...args: number[]): Entry[] {
    if (entries) {
      const arr: Entry[] = [...entries];
      const page: number = args[0] * args[1];
      return arr.splice(page, args[1]);
    }
    return entries;
  }
}
