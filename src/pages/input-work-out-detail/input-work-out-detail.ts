import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InputWorkOutPage } from '../input-work-out/input-work-out';
import { WorkOutUtilPage } from '../work-out-util/work-out-util';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

/*
  Generated class for the InputWorkOutDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-input-work-out-detail',
  templateUrl: 'input-work-out-detail.html'
})
export class InputWorkOutDetailPage {
  workOutScores = [];

  simpleColumns;
  workOutMenu;
  workOutData;
  date;
  part;
  done;
  cancel;
  reps;
  useTime = false;

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translate: TranslateService) {
    this.date = navParams.get('date');
    this.part = navParams.get('part');
    this.workOutMenu = navParams.get('workOutMenu');
    this.simpleColumns = (this.isUseTime()) ? WorkOutUtilPage.getColumnInfoForTime(translate.currentLang)
      : WorkOutUtilPage.getColumnInfo(translate.currentLang);
    this.initialTranslate(translate);
  }
  isUseTime() {
    if (this.workOutMenu['workOutId'] === 'Plank' || this.workOutMenu['workOutId'] === 'sidePlank'||this.workOutMenu['workOutId'] === 'backPlank') {
      this.useTime = true;
      return true;
    }
    return false;
  }
  ngOnInit() {
    this.storage.get('workOut').then(result => {
      if (result == null) {
        result = [];
      }
      this.workOutData = result;
      if (!this.loadDataIfExist()) {
        this.setInitialWorkoutScore(this.workOutMenu.workOutId);
      };
    });
  }
  initialTranslate(translate) {
    translate.get("done").subscribe((res: string) => {
      this.done = res;
    })
    translate.get("cancel").subscribe((res: string) => {
      this.cancel = res;
    })
    translate.get("reps").subscribe((res: string) => {
      this.reps = res;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InputWorkOutDetailPage');
  }

  // データが存在していなかったら、最終更新データ入れる
  setInitialWorkoutScore(workOutId) {
    this.storage.get('workOutLastUpdate').then(result => {
      if (result != null) {
        for (var i = 0; i < result.length; i++) {
          if (result[i]['workOutId'] == workOutId) {
            this.workOutScores = WorkOutUtilPage.makeWorkOutScores(result[i]['workOutSets'], this.useTime);
            return;
          }
        }
      }
      this.workOutScores[0] = (WorkOutUtilPage.getDefaultValue(this.translate.currentLang, this.useTime))
    });
  }

  loadDataIfExist() {
    var isExist = false;
    var workOutDate = WorkOutUtilPage.splitDateInfo(this.date);
    for (var i = 0; i < this.workOutData.length; i++) {
      var compareDate = this.workOutData[i]['workOutDate'];
      if (this.workOutData[i]['workOutMenu']['workOutId'] === this.workOutMenu['workOutId'] &&
        WorkOutUtilPage.isSameDate(workOutDate, compareDate)) {
        this.workOutScores = WorkOutUtilPage.makeWorkOutScores(this.workOutData[i]['workOutSets'], this.isUseTime);
        isExist = true;
      }
    }
    return isExist;
  }

  doneInput(workOutScores) {
    var workOutSets = [];
    for (var i = 0; i < workOutScores.length; i++) {
      var workOutScore = workOutScores[i].split(" ");
      var workOutSet = {
        weight: workOutScore[0],
        unit: workOutScore[1],
        reps: workOutScore[2],
        repsUnit: workOutScore[3]
      }
      workOutSets.push(workOutSet);
    }
    this.setWorkOutScore(workOutSets);

  }
  setWorkOutScore(workOutSets) {
    var workOutResult = {
      workOutMenu: this.workOutMenu,
      workOutSets: workOutSets,
      workOutDate: WorkOutUtilPage.splitDateInfo(this.date)
    }
    // 重複登録防止用ロジック
    var isAlreadySet = false;
    for (var i = 0; i < this.workOutData.length; i++) {
      if (this.workOutData[i]['workOutMenu']['workOutId'] === workOutResult['workOutMenu']['workOutId'] &&
        WorkOutUtilPage.isSameDate(this.workOutData[i]['workOutDate'], workOutResult['workOutDate'])
      ) {
        isAlreadySet = true;
        this.workOutData[i]['workOutSets'] = workOutResult['workOutSets'];
      }
    }
    if (!isAlreadySet) {
      this.workOutData.push(workOutResult);
    }
    /*
      ストレージから最終更新データ持ってきて、今回データと比較する。
      新しい方を保存する。
      持ち方は、リスト
    */
    this.storage.set('workOut', this.workOutData).then(result => {
      //setLastUpdateScore
      this.storage.get('workOutLastUpdate').then(lastUpdateDataList => {
        var workOutData = {
          workOutId: workOutResult['workOutMenu']['workOutId'],
          workOutSets: workOutResult['workOutSets'],
          workOutDate: workOutResult['workOutDate']
        };
        if (lastUpdateDataList == null) {
          lastUpdateDataList = [];
          lastUpdateDataList.push(workOutData);
        } else {
          for (var i = 0; i < lastUpdateDataList.length; i++) {
            if (lastUpdateDataList[i]['workOutId'] == workOutData['workOutId']) {
              lastUpdateDataList[i]['workOutSets'] = workOutData['workOutSets'];
              break;
            }
          }
          lastUpdateDataList.push(workOutData);
        }
        this.storage.set('workOutLastUpdate', lastUpdateDataList);
      })
      if (this.part == "unknown") {
        this.navCtrl.setRoot(HomePage, {
          date: this.date
        });
      } else {
        this.navCtrl.setRoot(InputWorkOutPage, {
          date: this.date,
          selectedPart: this.part
        });
      }
    });
  }

  removeLine(workOutScore) {
    for (var i = 0; i < this.workOutScores.length; i++) {
      if (this.workOutScores[i] == workOutScore) {
        this.workOutScores.splice(i, 1);
        break;
      }
    }
  }
  addLine() {
    this.workOutScores.push(this.workOutScores[this.workOutScores.length - 1]);
  }
}
