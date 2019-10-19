import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.page.html',
  styleUrls: ['./air.page.scss'],
})
export class AirPage implements OnInit {

  // result: string;
  // error: string;
  userDetails:any=[];

  constructor(public userService: UserService ) {
    // this.result = '';
    // this.error = '';
   }
  //  private prepareDataRequest(): Observable<object> {
  //   const dataUrl = 'https://api.breezometer.com/air-quality/v2/current-conditions?lat=48.857456&lon=2.354611&key=8fa48f2766fc44e9aedb75b0500bde74&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information';
  //   return this.http.get(dataUrl);
  // }

  // ionViewWillEnter() {
  //   this.prepareDataRequest()
  //     .subscribe(
  //       resData => {
  //         this.result = JSON.stringify(resData);
  //       },
  //       err => {
  //         this.error = 'An error occured';
  //       }
  //     );
  // }

  GetUserDetails(){
    this.userService.GetUsers().subscribe((data) => {
      var anyData = <any>data;
      this.userDetails = anyData.data;
    })
  }

  ngOnInit() {
  }

}
