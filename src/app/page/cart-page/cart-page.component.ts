import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  //name
  constructor(private cookie:CookieService, private route: Router) { 
    if(!this.cookie.check("userId")){
      this.route.navigate(['/home/UserNotLoggedIn'])

    }
  }

  ngOnInit(): void {
  }

}
