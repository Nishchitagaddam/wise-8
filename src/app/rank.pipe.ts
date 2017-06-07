import { Pipe, PipeTransform } from '@angular/core';
import {CollegeDataService} from './college-data-service.service';
@Pipe({
  name: 'ranksort'
})
export class ranksort implements PipeTransform {


  transform(value: any, rank : string): any {
    if(rank){
      let rankint = parseInt(rank);
    
    
      return value.filter(function (sort){
        if(rank.length == sort.FIELD3.length){
          var i:any;
        for(i = rank; i <= rank+5000; i++){
        
              return sort.FIELD3;
           
        } 
        }
      })        
    } 
    
    return value;
  }

}
