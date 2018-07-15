import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  workout = "あ";

  constructor(public translate: TranslateService) {
    translate.get("workout").subscribe((res: string) => {
      this.workout = res;
    })
  }
}
