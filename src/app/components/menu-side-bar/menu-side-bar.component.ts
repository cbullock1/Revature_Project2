import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-menu-side-bar',
  templateUrl: './menu-side-bar.component.html',
  styleUrls: ['./menu-side-bar.component.css']
})
export class MenuSideBarComponent implements OnInit {
  catId: any;
  categories:any[] = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router, private data: DataService) {
    this.catId = this.activeRoute.snapshot.paramMap.get("menuCatId")
    console.log(this.catId);
   }

  ngOnInit(): void {

    this.data.getAllCategories().subscribe(response =>{
      //console.log(response.length)
      this.categories = response;
      this.categories.sort((a,b) => {return a.catId < b.catId ? -1 : 1;});
      //console.log(this.categories)
    })
    
  }

  onButtonClicked(catId : number){
    //console.log(catId);
    this.catId = catId;
    this.router.navigate(['menu/', catId])
  }

}
