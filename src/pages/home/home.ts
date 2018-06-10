import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {ReimubursePage} from "../reimuburse/reimuburse";
import {ApplicationPage} from "../application/application";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }


  sliders = [
    {
      imgUrl:"http://placehold.it/800x400"
    },
    {
      imgUrl:"http://placehold.it/800x400"
    },
    {
      imgUrl:"http://placehold.it/800x400"
    }
  ]



  goReimubursePage(){
    this.navCtrl.push(ReimubursePage)
  }

  goApplication(){
    this.navCtrl.push(ApplicationPage)
  }

}
