import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateNum'
})
export class TruncateNumPipe implements PipeTransform {

  transform(number): any {
    if (number === null) { return number; }
    if (number > 1) {
      return number.toFixed(2);
    }
    return number.toFixed(6);
  }

}
