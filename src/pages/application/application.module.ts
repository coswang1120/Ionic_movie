import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplicationPage } from './application';

@NgModule({
  declarations: [
    ApplicationPage,
  ],
  imports: [
    IonicPageModule.forChild(ApplicationPage),
  ],
})
export class ApplicationPageModule {}
