import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData',
})
export class SortDataPipe implements PipeTransform {
  transform(list: any, column: any): any {
    let sortedData = list.sort((a: any, b: any) => {
      if (a[column] > b[column]) {
        return 1;
      }
      if (a[column] < b[column]) {
        return -1;
      }
      return 0;
    });
    return sortedData;
  }
}
