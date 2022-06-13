import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): any {
    var output = value.toString();
    if (value >= 80){
      output += " GOOD";
    } else if (value > 40 && value < 80){
      output += " REGULAR";
    } else {
      output += " BAD";
    }
    return output;
  }

}
