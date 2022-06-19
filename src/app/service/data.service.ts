import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';
import { Cart } from '../model/cart';

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
    return this.http.get<any>(`${this.apiServerUrl}/Food/getFoodList`)
  }

  getAllFoodByCategory(catId:number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Food/category/${catId}`)
  }

  getFoodById(foodId:number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Food/foodId/${foodId}`)
  }

  getOrderByOrderId(orderid:number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Orders/orderId/${orderid}`)
  }

  getOrderByUser(userId: any):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Orders/getByUser/${userId}`)
  }

  addOrder(order:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/Orders/addOrders`,order)

  }
  updateOrder(order: any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/Orders/orderUpdate`,order)
  }
  addCart(cart:Cart):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/Cart/add`,cart)
  }
  
  getCartById(orderId:number):Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/Cart/getCart/${orderId}`)
  }
  deleteCartItem(cartId:number):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/Cart/DeleteCartId/${cartId}`)
  }

}
