import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged : boolean = false;
  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.isLogged = this.cookie.check("userId")
  }

}
