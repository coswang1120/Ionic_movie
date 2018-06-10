import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the BaiduPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-baidu',
  templateUrl: 'baidu.html',
})
export class BaiduPage {
  url:SafeResourceUrl;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private sanitizer:DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaiduPage');
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://192.168.190.2:3000/#/home/baoxiaoHome')
    
  }

}
