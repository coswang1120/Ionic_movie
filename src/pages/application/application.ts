import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";


@IonicPage()
@Component({
  selector: 'page-application',
  templateUrl: 'application.html',
})
export class ApplicationPage {
  url:SafeResourceUrl
  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationPage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://192.168.190.2:3000/#/home/approveList')
  }

}
