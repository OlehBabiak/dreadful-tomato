import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from '../../models/responseData';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(entries: Entry[], args: string): Entry[] {
    const search: Entry[] = [...entries];
    if (args) {
      return search
        .filter(
          (entry: Entry): boolean =>
            entry.title.toLowerCase().search(args.toLowerCase()) !== -1
        )
        .slice();
    }
    return entries;
  }
}
