import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

/**
 * Generated class for the ReimubursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reimuburse',
  templateUrl: 'reimuburse.html',
})
export class ReimubursePage {
  url:SafeResourceUrl

  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReimubursePage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://192.168.190.2:3000/#/home/baoxiaoHome')
  }

}
