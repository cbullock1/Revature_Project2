import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  catId : any;
  categories:any[] = [];

  FoodItems: any[] = [];
  current_url_var : any;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private data: DataService) {
    this.catId = this.activeRoute.snapshot.paramMap.get("menuCatId")
    console.log(this.catId);
   }

  ngOnInit(): void {
    console.log("The ngOnInit is being read")
    this.data.getAllCategories().subscribe(response =>{
      //console.log(response.length)
      this.categories = response;
      this.categories.sort((a,b) => {return a.catId < b.catId ? -1 : 1;});
      //console.log(this.categories)
    })

    this.current_url_var = this.activeRoute.snapshot.paramMap.get("menuCatId")
    if(this.current_url_var == null){
      this.data.getAllFood().subscribe(response =>{
        this.FoodItems = response;
      })
    }
    else{
      this.data.getAllFoodByCategory(this.current_url_var).subscribe(response =>{
        console.log(response)
        this.FoodItems = response;
      })
    }

  }

  onButtonClicked(catId : number){
    //console.log(catId);
    this.catId = catId;
    this.router.navigate(['menu/', catId])

    this.current_url_var = catId
    if(this.current_url_var == null){
      this.data.getAllFood().subscribe(response =>{
        this.FoodItems = response;
      })
    }
    else{
      this.data.getAllFoodByCategory(this.current_url_var).subscribe(response =>{
        console.log(response)
        this.FoodItems = response;
      })
    }


  }

}
