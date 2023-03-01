import { Pipe, PipeTransform } from '@angular/core';
import { orderData } from '../dashboard/order.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: orderData[], searchData: string): orderData[] {
    if (!searchData) {
      return value;
    }

    searchData = searchData.toLowerCase();
    const data = value.filter((item) => {
      return (
        item.status.toLowerCase().indexOf(searchData.toLowerCase()) !== -1 ||
        item.userName.toLowerCase().indexOf(searchData.toLowerCase()) !== -1
      );
    });

    return data;
  }
}
