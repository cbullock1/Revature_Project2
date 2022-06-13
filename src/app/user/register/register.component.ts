import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userModel=new User()
 
constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  OnSubmitHandler(){
    console.log(this.userModel)
    this.authService.register(this.userModel).subscribe(response =>{
      console.log(response)
    })
  }

  
  }


