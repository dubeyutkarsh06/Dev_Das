import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  GetUsers(){
    return this.http.get('https://api.breezometer.com/air-quality/v2/current-conditions?lat=48.857456&lon=2.354611&key=8fa48f2766fc44e9aedb75b0500bde74&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects');
  }

  getWater(){
    return this.http.get(
      'https://api.data.gov.in/resource/4d4250cb-e7dd-4f50-a3f7-c564a0533844?format=json&api-key=579b464db66ec23bdd000001a7acbad520184374518be6f67ffe8515'
    );
  }

}
