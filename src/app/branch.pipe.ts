import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'branchsort',
})
export class branchsort implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return el.FIELD2.toLowerCase().indexOf(input) > -1;
                
            })
        }
        return value;
    }
}