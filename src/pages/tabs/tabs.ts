import { Component } from '@angular/core';

import { DealsPage } from '../deals/deals';
import { AssetsPage } from '../assets/assets';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DealsPage;
  tab3Root = AssetsPage;

  constructor() {

  }
}
