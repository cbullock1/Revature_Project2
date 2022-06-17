import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //cartDisplay :boolean;

  constructor(private cookie: CookieService) {
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
    
  }
  

  

}
