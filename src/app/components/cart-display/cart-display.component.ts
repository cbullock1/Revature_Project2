import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { fullOrder } from 'src/app/model/fullOrder';
import { Order } from 'src/app/model/order';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css']
})
export class CartDisplayComponent implements OnInit {

  cart: any[] = []
  cartItems: any[] = []
  totalPrice : number = 0;

  constructor(private cookie: CookieService, private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.data.getOrderByUser(parseInt(this.cookie.get("userId"))).subscribe(response =>{
      console.log("checking response data")
      console.log(response)
      const orderlist = response
      const size = orderlist.length
      this.cookie.set("orderId", orderlist[size-1].orderId)
      this.cookie.set("orderStatus", orderlist[size-1].orderStatus)
    })
    if(this.cookie.get("orderStatus") == "pending"){
    this.data.getCartById(parseInt(this.cookie.get("orderId"))).subscribe(response =>{
      this.cart = response
      console.log(this.cart)
      let iter = 0; 
      this.cart.forEach(item =>{
        this.data.getFoodById(item.foodId).subscribe(response => {
          //console.log(response)
          this.totalPrice += response.price;
          console.log(response)
          this.cartItems.push(response)
          //console.log(this.cartItems[0])
        })
        
      })
      console.log(this.cartItems)
      
      
    })
  }
}

  onButtonClick(foodId:any){
    this.data.deleteCartItem(foodId).subscribe(response =>{
      console.log("Item has been deleted")
      window.location.reload()
      
    })
    
  }

  orderSubmit(orderId:number){
    if(this.cookie.get("orderStatus")=="pending"){
    console.log(orderId)
    let order = new fullOrder(orderId, parseInt(this.cookie.get("userId")),"complete")
    this.data.updateOrder(order).subscribe(reponse=>{
      console.log("Order complete")
      this.cookie.set("orderStatus","complete")
      window.location.reload()
    })
  }
  else{
    alert("Order is either empty or completed")
  }

  }

}
