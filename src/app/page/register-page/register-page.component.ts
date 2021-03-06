import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  constructor(private cookie: CookieService, private route: Router) {
    if(this.cookie.check("userId")){
      this.route.navigate(['/home/UserLoggedIn'])

    }
   }

  ngOnInit(): void {
  }

}
