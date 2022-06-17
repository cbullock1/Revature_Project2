import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiServerUrl = environment.apiBaseUrl 

  constructor(private http:HttpClient) { }

  getAllCategories():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Cat/getCats`)
  }

  getAllFood():Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Food`)
  }

  getAllFoodByCategory(catId:number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Food/category/${catId}`)
  }

  getOrderByOrderId(orderid:number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Orders/orderId/${orderid}`)
  }

}
