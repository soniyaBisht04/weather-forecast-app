import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number): string {
    return (((value - 273.15) * 9) / 5 + 32).toPrecision(2);
  }

}
