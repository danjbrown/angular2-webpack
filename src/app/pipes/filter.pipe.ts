import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {
  transform(values: any, searchterm: any): any {
    let res: any = [];
    for (let i = 0; i < values.length; i++) {
      if (values[i].name.indexOf(searchterm) != -1) {
        res.push(values[i]);
      }
    }

    return res;
  }
}