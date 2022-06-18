import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {
  public Cid:string
  public Cname:string;
  public Cemail:string
  public Cphone:string
  public Caddress:string
  public Ccity:string
  public Cstate:string
  public Czip:string
  
  userModel: User;
  
  constructor(private cookie: CookieService, private authService: AuthService, private route: Router) {
    this.Cname = this.cookie.get("name");
    this.Cid = this.cookie.get("userId");
    this.Cemail = this.cookie.get("email");
    this.Cphone = this.cookie.get("phone");
    this.Caddress = this.cookie.get("address");
    this.Ccity = this.cookie.get("city");
    this.Cstate = this.cookie.get("state");
    this.Czip = this.cookie.get("zip");
    this.userModel =new User(this.Cid,this.Cname,this.Cemail,this.Cphone, this.Caddress, this.Ccity, this.Cstate, this.Czip);

   }

  ngOnInit(): void {
    
  }
  onSubmitHandler(){

    console.log(this.userModel)
    this.authService.update(this.userModel).subscribe(response =>{
      console.log("Update was sucessful!")

      for (const key in response) {
        if (Object.prototype.hasOwnProperty.call(response, key)) {
          const element = response[key];
          this.cookie.set(key, element);
        }
      }
      this.route.navigate(['/home'])
      
    })

  }

}
