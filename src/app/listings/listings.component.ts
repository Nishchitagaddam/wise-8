import { Component, OnInit } from '@angular/core';
import {CollegeDataService} from '../college-data-service.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
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
