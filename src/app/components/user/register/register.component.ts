import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userModel=new User()
 
constructor(private authService:AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  OnSubmitHandler(){
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(response =>{
      console.log("Registration was sucessful! Please login")
      this.route.navigate(['/login'])
      
    })
  }

  
  }


