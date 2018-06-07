import { Component } from '@angular/core';



import { HomePage } from '../home/home';
import { ClassifyPage } from '../classify/classify';
import { FavoritePage } from '../favorite/favorite';
import { PersonalPage } from '../personal/personal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ClassifyPage;
  tab3Root = FavoritePage;
  tab4Root = PersonalPage;


  constructor() {

  }
}
