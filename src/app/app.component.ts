import { Component , OnInit } from '@angular/core';
import { CollegeDataService } from './college-data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [CollegeDataService],
 
})
export class AppComponent implements OnInit {
  title = 'app works!';
  colleges = [];
  constructor(private college_data : CollegeDataService){}
  
  ngOnInit() {
	this.college_data.fetchData().subscribe(
		(data) => this.colleges = data
	);
  }
  
}