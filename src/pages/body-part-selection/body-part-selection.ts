import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { WorkOutDictPage } from '../work-out-dict/work-out-dict';
/*
  Generated class for the BodyPartSelection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-body-part-selection',
  templateUrl: 'body-part-selection.html'
})
export class BodyPartSelectionPage {
  date;
  monthAndDayLabel: string;
  bodyParts;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translate: TranslateService) {
    this.date = navParams.get("date");
    this.monthAndDayLabel = this.date;
  }
  ngOnInit() {
    this.setBodyParts();
  }

  goToInput(bodyPart) {
    this.navCtrl.push('InputWorkOutPage', {
      selectedPart: bodyPart,
      date: this.date
    });
  }

  goToAddTheme() {
    this.navCtrl.push('AddThemePage', {
      date: this.date
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BodyPartSelectionPage');
  }

  setBodyParts() {
    this.storage.get("workOutPattern").then(result => {
      this.bodyParts = result;
      for (var i = 0; i < this.bodyParts.length; i++) {
        var name = WorkOutDictPage.getPatternNameForInitial(this.bodyParts[i]['workOutPatternId'], this.translate.currentLang)
        if (name != "") {
          this.bodyParts[i]['workOutPatternName'] = name;
        }
      }

      if (this.navParams.get('newTheme') != null) {
        this.bodyParts.push(this.navParams.get('newTheme'));
      }
    });
  }
  removeLine(bodyPart) {
    for (var i = 0; i < this.bodyParts.length; i++) {
      if (this.bodyParts[i]['bodyPartId'] === bodyPart['bodyPartId']) {
        this.bodyParts.splice(i, 1);
        this.storage.set('workOutPattern', this.bodyParts);
        break;
      }
    }
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
