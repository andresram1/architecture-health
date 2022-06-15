import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number): any {
    var output = value.toFixed(2).toString().concat("%");
    if (value >= 80){
      output += " Good";
    } else if (value > 40 && value < 80){
      output += " Regular";
    } else {
      output += " Bad";
    }
    return output;
  }

}
