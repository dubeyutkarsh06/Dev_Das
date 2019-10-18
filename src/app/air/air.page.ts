import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-air',
  templateUrl: './air.page.html',
  styleUrls: ['./air.page.scss'],
})
export class AirPage implements OnInit {

  data: string;
  error: string;

  constructor(private http: HttpClient, public navCtrl: NavController ) {
    this.data = '';
    this.error = '';
   }
   private prepareDataRequest(): Observable<object> {
    const dataUrl = 'https://api.breezometer.com/air-quality/v2/current-conditions?lat=48.857456&lon=2.354611&key=8fa48f2766fc44e9aedb75b0500bde74&features=breezometer_aqi,local_aqi,health_recommendations,sources_and_effects,pollutants_concentrations,pollutants_aqi_information';
    return this.http.get(dataUrl);
  }

  ionViewWillEnter() {
    this.prepareDataRequest()
      .subscribe(
        data => {
          this.data = JSON.stringify(data);
        },
        err => {
          this.error = 'An error occured';
        }
      );
  }

  ngOnInit() {
  }

}
