import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CollegeDataService } from './college-data-service.service';
import { HomeComponent } from './home/home.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import {AngularFireModule,AuthProviders,AuthMethods} from 'angularfire2';
import { FilterPipe } from './filter.pipe';
import { branchsort } from './branch.pipe';
import { ranksort } from './rank.pipe';
import { addresspipe } from './address.pipe';
import { AddlistingComponent } from './addlisting/addlisting.component';
import { ReviewListComponent } from './review-list/reviewlist.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDKor3RM3Km9H3RKAO8sbY5kSt1k5w2b-8",
    authDomain: "eamcetmock.firebaseapp.com",
    databaseURL: "https://eamcetmock.firebaseio.com",
    projectId: "eamcetmock",
    storageBucket: "eamcetmock.appspot.com",
    messagingSenderId: "290947480246"
  };

  const firebaseAuthConfig = {
    provider: AuthProviders.Google,
    method:AuthMethods.Popup
  }
  

const appRoutes: Routes=[
  {path:'', component:HomeComponent},
  {path:'listings', component:ListingsComponent},
   {path:'listing', component:ListingComponent},
    {path:'addlisting', component:AddlistingComponent},
     {path:'review-list', component:ReviewListComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    ListingComponent,
    NavbarComponent,
    FilterPipe,
    branchsort,
    ranksort,
    addresspipe,
    AddlistingComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [CollegeDataService],
  bootstrap: [AppComponent]
    
})
export class AppModule { }
