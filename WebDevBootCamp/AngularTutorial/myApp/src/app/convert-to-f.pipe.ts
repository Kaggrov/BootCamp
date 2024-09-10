import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToF'
})
export class ConvertToFPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return ((value-32)*5)/9;
  }

}
