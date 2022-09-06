import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name:'genderTitle'
})
export class GenderTitlePipe implements PipeTransform {
  transform(value: string, gender: string): string {
    if (gender.toLocaleLowerCase() == 'male') {
      return 'Mr. ' + value;
    } else {
      return 'Ms. ' + value;
    }
  }
}
