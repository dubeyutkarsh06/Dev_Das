import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  GetUsers(){
    return this.http.get('https://api.airvisual.com/v2/city?city=Patna&state=Bihar&country=India&key=29854580-8fc7-4aa0-a16f-2d34fbc79d07');
  }
}
