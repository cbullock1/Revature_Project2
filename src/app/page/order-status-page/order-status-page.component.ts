import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-order-status-page',
  templateUrl: './order-status-page.component.html',
  styleUrls: ['./order-status-page.component.css']
})
export class OrderStatusPageComponent implements OnInit {

  constructor(private cookie: CookieService, private route: Router) {
    if(!this.cookie.check("userId")){
      this.route.navigate(['/home/UserNotLoggedIn'])

    }
   }


  ngOnInit(): void {
  }

}
