import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import 'rxjs/add/operator/map';
import {AngularFire,FirebaseListObservable} from 'angularfire2';
@Injectable()
export class CollegeDataService {
reviews:FirebaseListObservable<any[]>;
review:FirebaseListObservable<any[]>;
  constructor(private http : Http,
              private af : AngularFire
             ) { }
   addReview(review){
	this.reviews = this.af.database.list('/Reviews/') as FirebaseListObservable<Review[]>  
	return this.reviews.push(review);
  } 
   getReview(){
	  this.reviews = this.af.database.list('/Reviews') as FirebaseListObservable<Review[]>	
	  return this.reviews;
  }           
  
  fetchData(){
	return this.http.get('https://eamcetmock.firebaseio.com/.json').map(
		(res) => res.json()
	);
  }

}
interface Review{
	$key?: any;	
	$college?:any;
  $review?:any;
	
}