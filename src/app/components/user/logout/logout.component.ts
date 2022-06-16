import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private cookie: CookieService, private route: Router) { }

  ngOnInit(): void {
    this.cookie.deleteAll();
    this.route.navigate(['/login'])
  }

}
