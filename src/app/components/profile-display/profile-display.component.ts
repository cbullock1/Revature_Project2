import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent implements OnInit {
  public id:string
  public name:string;
  public email:string
  public phone:string
  public address:string
  public city:string
  public state:string
  public zip:string
  
  constructor(private cookie: CookieService) {
    this.name = this.cookie.get("name");
    this.id = this.cookie.get("userId");
    this.email = this.cookie.get("email");
    this.phone = this.cookie.get("phone");
    this.address = this.cookie.get("address");
    this.city = this.cookie.get("city");
    this.state = this.cookie.get("state");
    this.zip = this.cookie.get("zip");

   }

  ngOnInit(): void {
    
  }

}
