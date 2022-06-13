import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.css']
})
export class MenuSideBarComponent implements OnInit {
  catId: any;
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.catId = this.activeRoute.snapshot.paramMap.get("menuCatId")
    console.log(this.catId);
   }

  ngOnInit(): void {
    
  }

  onButtonClicked(catId : number){
    //console.log(catId);
    this.catId = catId;
    this.router.navigate(['menu/', catId])
  }

}
