import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    responseMessage=''
  constructor(public authService:AuthService, private cookie: CookieService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.get("error") == "failure"){
      alert("Login Failed: Please Check Email and Password")
    }
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

  }, (error: HttpErrorResponse) => {
    if(error.status == 500){
      this.route.navigate(['/login/failure'])
    }
  })
    }
  }


