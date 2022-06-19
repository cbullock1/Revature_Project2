import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {

  categories:any[] = [];

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
    this.data.getAllCategories().subscribe(response =>{
      //console.log(response.length)
      this.categories = response;
      this.categories.sort((a,b) => {return a.catId < b.catId ? -1 : 1;});
      console.log(this.categories)
    })
  }

  onButtonClicked(catId : any){
    console.log(catId);
    this.router.navigate(['menu/', catId])
  }

}
