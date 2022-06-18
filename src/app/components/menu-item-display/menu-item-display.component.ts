import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { scheduled } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-menu-item-display',
  templateUrl: './menu-item-display.component.html',
  styleUrls: ['./menu-item-display.component.css']
})
export class MenuItemDisplayComponent implements OnInit {
  FoodItems: any[] = [];
  current_url_var : any;
  new_url_var: any;
  
  constructor(private activeRoute: ActivatedRoute, private data: DataService, private route:Router) {
   
   }

  ngOnInit(): void {
    //scheduled()
    // this.new_url_var = this.activeRoute.snapshot.paramMap.get("menuCatId");
    // console.log(this.new_url_var)
    // if(this.current_url_var != this.new_url_var){
    //   this.current_url_var = this.new_url_var;
    //   window.location.reload();
    // }
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

}
