import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Cart } from 'src/app/model/cart';
import { Order } from 'src/app/model/order';
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

  constructor(private activeRoute: ActivatedRoute, private router: Router, private data: DataService, private cookie: CookieService) {
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
  AddToCart(foodId: number){
    //First checks if there is an order pending for user if not then it will make an order
    if(this.cookie.check("userId")){
      const check = this.cookie.check("orderStatus")
      if(check){
        const value:String = this.cookie.get("orderStatus")
        if( value != "pending"){
          const order = new Order(parseInt(this.cookie.get("userId")), "pending")
          this.data.addOrder(order).subscribe(response =>{
            this.cookie.set("orderStatus", response.data.orderStatus)
            this.cookie.set("orderId", response.data.orderId)
          })
        }

      }

      const cart = new Cart(parseInt(this.cookie.get("orderId")), foodId)
      this.data.addCart(cart).subscribe(response =>{ 
        alert("This item has been added to your cart")
      })

    }

  }

}
