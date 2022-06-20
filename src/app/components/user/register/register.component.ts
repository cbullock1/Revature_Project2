import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userModel=new User()

constructor(private authService:AuthService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.activeRoute.snapshot.paramMap.get("error") == "failure"){
      alert("Registration Failed: Please Check your information")
    }
  }
  OnSubmitHandler(){
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(response =>{
      console.log("Registration was sucessful! Please login")
      this.route.navigate(['/login'])
      
    }, (error:HttpErrorResponse)=>{
      if(error.status == 500){
        this.route.navigate(['/register/failure'])
      }
    })
  }

  
  }


