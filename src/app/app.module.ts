import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ClassifyPage} from "../pages/classify/classify";
import {FavoritePage} from "../pages/favorite/favorite";
import {PersonalPage} from "../pages/personal/personal";
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BaiduPage } from '../pages/baidu/baidu';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClassifyPage,
    FavoritePage,
    PersonalPage,
    TabsPage,
    BaiduPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClassifyPage,
    FavoritePage,
    PersonalPage,
    TabsPage,
    BaiduPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
