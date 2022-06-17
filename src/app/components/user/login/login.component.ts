import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    responseMessage=''
  constructor(public authService:AuthService, private cookie: CookieService, private route: Router) { }

  ngOnInit(): void {
  }
  OnSubmitHandler(data:any){
  this.authService.login(data).subscribe(response =>{
    console.log(response)
    this.responseMessage=" login Successfully"
    
    for (const key in response) {
      if (Object.prototype.hasOwnProperty.call(response, key)) {
        const element = response[key];
        this.cookie.set(key, element);
      }
    }
    // console.log(this.cookie.get("userId"))
    this.route.navigate(['/home'])

  })
    }
  }


