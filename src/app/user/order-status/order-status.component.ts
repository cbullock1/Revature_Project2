import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {

  orderModel=new Order()

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSubmitHandler(){
    console.log(this.orderModel)
    this.authService.register(this.orderModel).subscribe(response =>{
      console.log(response)
    })
  }

}
