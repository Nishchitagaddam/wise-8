import { Component, OnInit } from '@angular/core';
import {CollegeDataService} from '../college-data-service.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
    colleges:any;
  constructor(private college_data:CollegeDataService) { }

   ngOnInit() {
   /* this.collegeDataService.().subscribe(listings => {
      this.listings=listings;
    });*/
    this.college_data.fetchData().subscribe((data) => {
      console.log(data);
     this.colleges = data
  });
}
}
