import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

 foodItemOnOrder: any[] = []
 orders:any[] = []
 orderList:any[] = []
 cartItems:any[] = []
 cartItemHolder: any[] = [];
  constructor(private dataService:DataService, private cookie: CookieService) { }

  ngOnInit(): void {
    
    // this.dataService.getOrderByUser(parseInt(this.cookie.get("userId"))).subscribe(response => {
    //   this.orders = response;
    //   this.orderList.push(response)
    //   //console.log(this.orders)
    //   this.orders.forEach(order => {
    //     if(order.orderStatus == "complete"){
    //       this.dataService.getCartById(order.orderId).subscribe(cartResponse => {
    //         //console.log(cartResponse)
    //         this.cartItems.push(cartResponse)
    //         this.cartItemHolder = cartResponse 
    //         this.cartItemHolder.forEach( cartItem  => {
    //           this.dataService.getFoodById(cartItem.foodId).subscribe(foods => {
    //             this.foodItemOnOrder.push(foods)
    //           })
    //         })
    //       })
    //     }
    //   })
    // })
    // console.log(this.orderList)
    // console.log(this.cartItems)
    // console.log(this.foodItemOnOrder)
    
  }
}
