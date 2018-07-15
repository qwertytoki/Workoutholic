import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkOutUtilPage } from '../work-out-util/work-out-util';
import { WorkOutDictPage } from '../work-out-dict/work-out-dict';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
/*
  Generated class for the InputWorkOut page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-input-work-out',
  templateUrl: 'input-work-out.html'
})
export class InputWorkOutPage {
  selectedPart;
  doneMenus;
  date: string;
  workOutMenus;
  workOutMenu;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translate: TranslateService
  ) {
    this.selectedPart = navParams.get("selectedPart");
    this.date = navParams.get("date");
    this.workOutMenus = navParams.get("selectedPart")['workOutMenus'];
    // this.workOutMenus = WorkOutMenusPage.getWorkOutMenus(this.selectedPart.id);
    this.workOutMenu = navParams.get("workOutMenu");
    if (this.workOutMenu != null) {
      this.workOutMenus.push(this.workOutMenu);
    }
    this.translateWorkouts();
  }
  translateWorkouts() {
    for (var i = 0; i < this.workOutMenus.length; i++) {
      this.workOutMenus[i]["workOutName"] = WorkOutDictPage.getName(this.workOutMenus[i]["workOutId"], this.translate.currentLang);
    }
  }
  ngOnInit() {
    this.storage.get('workOut').then(result => {
      this.showCheckMarkIfDone(result);
    });
  }

  showCheckMarkIfDone(result) {
    this.doneMenus = result;
    if (this.doneMenus === null) {
      this.doneMenus = [];
    }
    for (var i = 0; i < this.doneMenus.length; i++) {
      for (var j = 0; j < this.workOutMenus.length; j++) {
        if (this.doneMenus[i]['workOutMenu']['workOutId'] === this.workOutMenus[j]['workOutId'] &&
          WorkOutUtilPage.isSameDate(
            this.doneMenus[i]['workOutDate'], WorkOutUtilPage.splitDateInfo(this.date))) {
          this.workOutMenus[j]['alreadyDone'] = true;
        }
      }
    }
  }

  goToInputDetail(workOutMenu) {
    this.navCtrl.push('InputWorkOutDetailPage', {
      workOutMenu: workOutMenu,
      date: this.date,
      part: this.selectedPart
    });
  }

  doneInput() {
    this.navCtrl.setRoot(HomePage, {
      date: this.date
    });
  }

  ionViewDidLoad(workOutMenu) {
    console.log('ionViewDidLoad InputWorkOutPage');
  }

  tapAddMenu() {
    this.navCtrl.push('AddMenuPage', {
      date: this.date,
      part: this.selectedPart
    });
  }

  removeLine(workOutMenu) {
    for (var i = 0; i < this.workOutMenus.length; i++) {
      if (this.workOutMenus[i] == workOutMenu) {
        this.workOutMenus.splice(i, 1);
        this.updateStorage();
        break;
      }
    }
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

  updateStorage() {
    this.storage.get("workOutPattern").then(result => {
      for (var i = 0; i < result.length; i++) {
        if (result[i]['bodyPartId'] === this.selectedPart['bodyPartId']) {
          result[i]['workOutMenus'] = this.workOutMenus;
          break;
        }
      }
      this.storage.set('workOutPattern', result);
    });
  }
}
