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
//  cartItemHolder: any[] = [];
 cartTest: any[] = [];

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


    //   this.dataService.getOrderByUser(parseInt(this.cookie.get("userId"))).subscribe(response => {
    //   this.orders = response;
    //   this.orderList.push(response)
    //   //console.log(this.orders)
    //   this.orders.forEach(order => {
    //       if(order.orderStatus == "complete"){
    //       this.dataService.getCartToken(order.orderId).subscribe(cartRepsonse => {
    //         cartRepsonse.forEach((cartToken: any) =>{
    //           this.cartItems.push(cartToken)
    //         })
    //       })
    //      //this.cartItems.sort((a,b) => {return a.orderId < b.orderId ? -1 : 1;});
    //     }
    //   })
    // })
    // // this.cartTest =new Array()

    // console.log(this.cartTest)
    // console.log(this.cartTest.length)
    // for(let i = 0; i < this.cartItems.length-1; i++){
    //   console.log(i)
    //   for(let j = 0; j < this.cartItems.length-1; j++){
    //     if(this.cartItems[j].orderId > this.cartItems[j+1].orderId){
    //       let cartHolder = this.cartItems[j];
    //       this.cartItems[j] = this.cartItems[j+1]
    //       this.cartItems[j+1] = cartHolder
    //     }
    //   }
    // }
  
    //this.cartItems.sort((a,b) => {return a.orderId < b.orderId ? -1:1;});
    //this.cartItems.sort((a,b) => a.cartId.localCompare(b.cartId));

    this.dataService.getAllUserTokens(parseInt(this.cookie.get("userId"))).subscribe(response =>{
      this.cartItems = response
    })

    console.log(this.cartItems)


  }

}
