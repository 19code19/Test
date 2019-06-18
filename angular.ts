import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'GenderType'
})
export class GenderTitlePipe implements PipeTransform {
    transform(value: string, Gender: string): string
    {
        var value = Gender.toLowerCase() == "male" ? "Mr." + value : "Miss." + value;
        return value;
    }
}
