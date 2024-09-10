import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayResult'
})
export class DisplayResultPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    if(value>=80 && value<=100) return "Excellent"
    else if(value>=60) return "Good"
    else return "Need to Improve"
  }

}
