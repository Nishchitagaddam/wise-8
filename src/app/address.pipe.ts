import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addresspipe',
})
export class addresspipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.FIELD19.toLowerCase().indexOf(input) > -1;
                
            })
        }
        return value;
    }
}