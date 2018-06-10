import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { BaiduPage } from '../baidu/baidu';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private sanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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

  url:SafeResourceUrl;
 
  goBaidu(){
    this.navCtrl.push(BaiduPage)
    console.log("dakaibaidu")
  }
  
}
