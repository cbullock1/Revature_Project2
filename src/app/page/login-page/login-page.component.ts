import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private cookie: CookieService, private route: Router) {
    if(this.cookie.check("userId")){
      this.route.navigate(['/home/UserLoggedIn'])

    }
   }

  ngOnInit(): void {
  }

}
