import { SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  loginWithGoogle(user: SocialUser){
    return this.http.post(`http://localhost:8081/auth/google`, user);
  }

  // Calling API from Backend Application to get all users
  getUsers(token: any){
    return this.http.get(`http://localhost:8081/user/all`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  // Calling API from Backend Application to get all products
  getProducts(token: any){
    return this.http.get(`http://localhost:8081/product/all`,{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
