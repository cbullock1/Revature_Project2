import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-menu-item-display',
  templateUrl: './menu-item-display.component.html',
  styleUrls: ['./menu-item-display.component.css']
})
export class MenuItemDisplayComponent implements OnInit {
  FoodItems: any[] = [];
  requestType: any;
  constructor(private activeRoute: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.requestType = this.activeRoute.snapshot.paramMap.get("menuCatId")
    if(this.requestType == null){
      this.data.getAllFood().subscribe(response =>{
        this.FoodItems = response;
      })
    }
    else{
      this.data.getAllFoodByCategory(this.requestType).subscribe(response =>{
        console.log(response)
        this.FoodItems = response;
      })
    }
  }

}
