import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
 order:any[]=[]
 orderid=1
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getOrderByOrderId(this.orderid).subscribe(response =>{
      this.order=response.data

    })
  }
}
