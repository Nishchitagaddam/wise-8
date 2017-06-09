import { Component, OnInit } from '@angular/core';
import { CollegeDataService } from '../college-data-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.component.html',
  styleUrls: ['./addlisting.component.css']
})
export class AddlistingComponent implements OnInit {
 college:any;
 review:any;
  constructor(
    private firebaseService:CollegeDataService,
    private router:Router
  ) { }

  
  ngOnInit() {
  }

onAddSubmit(){
  //console.log(this.title);
  let listing = {
    college:this.college,
    review:this.review
  }
  this.firebaseService.addReview(listing);
  this.router.navigate(['/review-list']);
}

}
