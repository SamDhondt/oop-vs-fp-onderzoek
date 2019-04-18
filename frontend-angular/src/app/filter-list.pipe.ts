import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {
  transform(values: string[], filter: string): string[] {
    const filteredValues = [];
    for (const value of values) {
      if (value.indexOf(filter) >= 0) {
        filteredValues.push(value);
      }
    }
    return filteredValues;
  }
}
