import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkOutMenusAddPage } from '../work-out-menus-add/work-out-menus-add';
import { InputWorkOutPage } from '../input-work-out/input-work-out';
import { WorkOutDictPage } from '../work-out-dict/work-out-dict';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the AddMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-menu',
  templateUrl: 'add-menu.html'
})
export class AddMenuPage {
  allWorkOutMenus = [];
  initialWorkOutMenus = [];
  currentWorkOutMenus = [];
  workOutPattern = [];
  date;
  part;
  searchPlaceHolder;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translate: TranslateService) {
    this.date = navParams.get('date');
    this.part = navParams.get('part');
    var allWorkOutMenusCandidate = WorkOutMenusAddPage.getAllWorkOutMenus(translate.currentLang);
    this.setMenus(allWorkOutMenusCandidate);
    translate.get("search").subscribe((res: string) => {
      this.searchPlaceHolder = res;
    })
  }
  setMenus(allWorkOutMenusCandidate) {
    this.storage.get("workOutPattern").then(result => {
      if (result == null) {
        result = [];
      }
      this.workOutPattern = result;
      for (var i = 0; i < this.workOutPattern.length; i++) {
        if (this.workOutPattern[i]['bodyPartId'] === this.part['bodyPartId']) {
          this.currentWorkOutMenus = this.workOutPattern[i]['workOutMenus'];
          this.allWorkOutMenus = this.disableAlreadyRegisterd(allWorkOutMenusCandidate);
          this.initialWorkOutMenus = this.allWorkOutMenus;
        }
      }
      for (i = 0; i < this.allWorkOutMenus.length; i++) {
        this.allWorkOutMenus[i]['workOutName'] =
          WorkOutDictPage.getName(this.allWorkOutMenus[i]['workOutId'], this.translate.currentLang);
      }
    });
  }
  //重複チェック
  disableAlreadyRegisterd(menuCandidate) {
    for (var i = 0; i < menuCandidate.length; i++) {
      for (var j = 0; j < this.currentWorkOutMenus.length; j++) {
        if (menuCandidate[i]['workOutId'] === this.currentWorkOutMenus[j]['workOutId']) {
          menuCandidate.splice(i, 1);
        }
      }
    }
    return menuCandidate;

  }

  onTapMenu(workOutMenu) {
    this.saveToStrage(workOutMenu);
    this.navCtrl.setRoot(InputWorkOutPage, {
      date: this.date,
      selectedPart: this.part,
      workOutMenu: workOutMenu
    });
  }
  saveToStrage(workOutMenu) {
    this.currentWorkOutMenus.push(workOutMenu);
    this.workOutPattern['workOutMenus'] = this.currentWorkOutMenus;
    this.storage.set("workOutPattern", this.workOutPattern);
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.allWorkOutMenus = this.initialWorkOutMenus;
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.allWorkOutMenus = this.allWorkOutMenus.filter((menu) => {
        return (menu['workOutName'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
