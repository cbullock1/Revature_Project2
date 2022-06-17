import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private cookie: CookieService, private route: Router) {
    if(!this.cookie.check("userId")){
      this.route.navigate(['/home/UserNotLoggedIn'])

    }
   }

  ngOnInit(): void {
  }

}
