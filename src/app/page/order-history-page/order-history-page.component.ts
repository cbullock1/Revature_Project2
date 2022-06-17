import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-order-history-page',
  templateUrl: './order-history-page.component.html',
  styleUrls: ['./order-history-page.component.css']
})
export class OrderHistoryPageComponent implements OnInit {

  constructor(private cookie: CookieService, private route: Router) {
    if(!this.cookie.check("userId")){
      this.route.navigate(['/home/UserNotLoggedIn'])

    }
   }

  ngOnInit(): void {
  }

}
