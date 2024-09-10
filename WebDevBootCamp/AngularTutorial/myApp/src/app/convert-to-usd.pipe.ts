import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToUsd'
})
export class ConvertToUsdPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [money] = args
    return "$" + value*money;
  }

}
