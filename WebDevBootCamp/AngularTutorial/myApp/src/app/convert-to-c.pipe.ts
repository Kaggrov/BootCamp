import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToC'
})
export class ConvertToCPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return ((value*9))/5 + 32;
  }

}
