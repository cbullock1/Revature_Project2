import { Injectable } from '@angular/core';
import { HttpClient} from'@angular/common/http';
import{ Observable  }  from'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl 
  constructor(private http:HttpClient) { }
  
  register(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/Users/register`,data)
}

  login(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/Users/login`,data)
}

  update(data:any):Observable<any>{
    return this.http.put<any>(`${this.apiServerUrl}/Users/userUpdate`,data)
  }

}