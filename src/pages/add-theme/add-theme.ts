import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BodyPartSelectionPage } from '../body-part-selection/body-part-selection';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the AddThemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-theme',
  templateUrl: 'add-theme.html',
})
export class AddThemePage {
  date;
  InputtedTheme;
  inputWorkoutName = " ";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translate: TranslateService) {
    this.date = navParams.get("date");
    translate.get("inputWorkoutName").subscribe((res: string) => {
      this.inputWorkoutName = res;
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddThemePage');
  }

  doneInput() {
    var newTheme = {
      bodyPartId: this.InputtedTheme,
      bodyPartName: this.InputtedTheme,
      workOutMenus: []
    }
    this.saveToStorage(newTheme);

    this.navCtrl.push(BodyPartSelectionPage, {
      date: this.date,
      newTheme: newTheme
    });
  }

  saveToStorage(newTheme) {
    if (this.InputtedTheme == null) {
      this.InputtedTheme = "NEW THEME";
    }
    this.storage.get('workOutPattern').then(result => {
      if (this.isDuplicate(result, newTheme)) {
        newTheme['bodyPartId'] = newTheme['bodyPartId'] + "_";
        newTheme['bodyPartName'] = newTheme['bodyPartId'] + "_";
      }
      result.push(newTheme);
      this.storage.set('workOutPattern', result);
    });
  }

  isDuplicate(workOutPatterns, newPattern) {
    for (var i = 0; i < workOutPatterns.length; i++) {
      if (workOutPatterns[i]['bodyPartId'] === newPattern['bodyPartId']) {
        return true;
      }
    }
    return false;
  }

}
