import { Component, OnInit } from '@angular/core';
import {CollegeDataService} from '../college-data-service.service';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './reviewlist.component.html',
  styleUrls: ['./reviewlist.component.css']
})
export class ReviewListComponent implements OnInit {
  collegeName:any;
  reviews:any;

  constructor(private firebaseService : CollegeDataService ) { }
  ngOnInit() {
     this.firebaseService.getReview().subscribe(reviews => {
			//console.log(reviews+"reviews");
			this.reviews = reviews;
	  
	});
  }

}
