import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //cartDisplay :boolean;

  constructor(private cookie: CookieService, private activeRoute: ActivatedRoute) {
    //console.log(this.cookie.check("CartDisplay"))
    // if(this.cookie.get("CartDisplay")=="true"){
    //   this.cartDisplay = true;
    // }
    // else{
    //   this.cartDisplay = false;
    // }
   }

  ngOnInit(): void {
    
    // if(this.cookie.get("CartDisplay")=="true"){
    //   this.cartDisplay = true;
    // }
    // else{
    //   this.cartDisplay = false;
    // }
    let check = this.activeRoute.snapshot.paramMap.get("errorMessage")
    if(check == "UserNotLoggedIn"){
      alert("User must be logged in to use this feature")
    }
    else if(check == "UserLoggedIn"){
      alert("You are already logged in")
    }

    
  }
  

  

}
