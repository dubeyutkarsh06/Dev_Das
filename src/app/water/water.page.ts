import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.page.html',
  styleUrls: ['./water.page.scss'],
})
export class WaterPage implements OnInit {

  userDetails:any=[];
  constructor(private userService: UserService) { }

  GetWaterDetails(){
    this.userService.getWater().subscribe((data) => {
      var anyData = <any>data;
      this.userDetails = anyData.data;
    })
  }

  ngOnInit() {
  }

}
