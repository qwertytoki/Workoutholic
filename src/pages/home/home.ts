import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { NavController, NavParams } from 'ionic-angular';
import { WorkOutUtilPage } from '../work-out-util/work-out-util';
import { WorkOutDictPage } from '../work-out-dict/work-out-dict';
import { TranslateService } from '@ngx-translate/core';
import { registerLocaleData } from '@angular/common';

import localeJa from '@angular/common/locales/ja';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  selectedDate;
  eventSource;
  viewTitle;
  isToday: boolean;
  workOutData;
  noWorkout;
  currentLang;
  currentImage = null;

  screen: any;
  state: boolean = false;

  calendar = {
    mode: 'month',
    formatDayHeader: 'EEEEE',
    currentDate: new Date(),
    locale: this.getLocale()
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public translate: TranslateService,
  ) {
    this.selectedDate = navParams.get('date');
    if (this.selectedDate == null) {
      this.selectedDate = WorkOutUtilPage.combineDateInfo(new Date());
    }
    this.moveToTargetDate(this.selectedDate);
    translate.get("noWorkout").subscribe((res: string) => {
      this.noWorkout = res;
    });
    registerLocaleData(localeJa);
  }

  removeLine(workOutId, resultOfSelectedDate) {
    var baseDate = resultOfSelectedDate.events[0]['workOutResult']['workOutDate'];
    //表示データ削除用
    for (var i = 0; i < resultOfSelectedDate.events.length; i++) {
      if (resultOfSelectedDate.events[i]['workOutResult']['workOutMenu']['workOutId'] === workOutId) {
        resultOfSelectedDate.events.splice(i, 1);
        break;
      }
    }

    // カレンダーキャッシュ削除用
    for (i = 0; i < this.eventSource.length; i++) {
      if (WorkOutUtilPage.combineDateInfo(resultOfSelectedDate.date) == WorkOutUtilPage.combineDateInfo(this.eventSource[i]['startTime']) &&
        (workOutId === this.eventSource[i]['workOutId'])) {
        this.eventSource.splice(i, 1);
      }
    }

    // DBデータ削除用
    for (i = 0; i < this.workOutData.length; i++) {
      if (WorkOutUtilPage.isSameDate(baseDate, this.workOutData[i]['workOutDate']) &&
        (this.workOutData[i]['workOutMenu']['workOutId'] === workOutId)) {
        this.workOutData.splice(i, 1);
        this.updateStorage();
      }
    }
  }

  updateStorage() {
    this.storage.set('workOut', this.workOutData);
  }

  ngOnInit() {
    this.storage.get('workOutPattern').then(pattern => {
      if (pattern == null || pattern.length == 0) {
        //初めてのユーザー！
        this.setInitialMenu();
      } else {
        var needUpdate = false;
        for (var i = 0; i < pattern.length; i++) {
          if (pattern[i]['bodyPartId'] === 'upperBody') {
            pattern.splice(i, 1);
            needUpdate = true;
          }
        }
        if (needUpdate) {
          this.storage.set('workOutPattern', pattern);
        }
      }
    });

    this.storage.get('workOut').then(result => {
      this.workOutData = result;
      // 適用前作業 kgやsecついていないものをつける作業
      this.storage.get('Updated_20180328').then(isFirstLogin => {
        if (isFirstLogin == null) {
          //すべての結果に単位をつける適用前作業
          this.addRepsUnit();
          //終わったらDB更新を走らせる
          //this.storage.set('Updated_20180328',true);
        }
      });
      this.loadWorkOutResult();
    });

  }
  ionViewDidLoad() {
  }
  setInitialMenu() {
    this.storage.set("workOutPattern", WorkOutUtilPage.getIntialPattern(this.translate.currentLang))
  }

  //適用前作業
  addRepsUnit() {
    if (this.workOutData == null || this.workOutData.length == 0) {
      return
    }
    for (var i = 0; i < this.workOutData.length; i++) {
      var data = this.workOutData[i];
      for (var j = 0; j < data['workOutSets'].length; j++) {
        var set = data['workOutSets'][j];
        if (set['repsUnit'] == undefined && (data['workOutMenu']['workOutId'] != 'Plank' && data['workOutMenu']['workOutId'] != 'Plank')) {
          set['repsUnit'] = 'reps';
        } else if (data['workOutMenu']['workOutId'] == 'Plank' || data['workOutMenu']['workOutId'] == 'sidePlank') {
          set['repsUnit'] = 'secs'
        }
      }
    }
    this.storage.set('workOut', this.workOutData);
  }

  goToBodypart(date) {
    this.navCtrl.push('BodyPartSelectionPage', { date: date });
  }
  getLocale() {
    return (this.translate.currentLang === 'ja') ? 'ja-JP' : 'en-US';
  }

  // ----此処から先カレンダー
  loadWorkOutResult() {
    var events = [];
    if (this.workOutData == null) return;
    for (var i = 0; i < this.workOutData.length; i++) {
      var year = parseInt(this.workOutData[i]['workOutDate']['workOutYear'], 10);
      var month = parseInt(this.workOutData[i]['workOutDate']['workOutMonth'], 10);
      var startDay = parseInt(this.workOutData[i]['workOutDate']['workOutDay'], 10);
      var endDay = startDay + 1;
      var time;
      var endTime;
      time = new Date(Date.UTC(year, month - 1, startDay));
      endTime = new Date(Date.UTC(year, month - 1, endDay));
      events.push({
        workOutId: this.workOutData[i]['workOutMenu']['workOutId'],
        title: this.getListTitle(this.workOutData[i]),
        subTitle: this.getListSubTitle(this.workOutData[i]),
        workOutResult: this.workOutData[i],
        startTime: time,
        endTime: endTime,
        allDay: true
      });
    }
    this.eventSource = events;
  }

  getListTitle(workOutData) {
    var title = WorkOutDictPage.getName(workOutData['workOutMenu']['workOutId'], this.translate.currentLang);
    return title;
  }

  getListSubTitle(workOutData) {
    var title = "";
    for (var i = 0; i < workOutData['workOutSets'].length; i++) {
      var weight = workOutData['workOutSets'][i]['weight'];
      if (weight === '0') {
        weight = this.translate.currentLang === 'ja' ? '自重' : 'BodyWgt'
      } else {
        var weightUnit = (workOutData['workOutSets'][i]['unit'] == undefined) ? '' : workOutData['workOutSets'][i]['unit'];
        weight = weight + weightUnit;
      }
      var reps = workOutData['workOutSets'][i]['reps'];
      var repsUnit = workOutData['workOutSets'][i]['repsUnit'];
      if (repsUnit == 'mins') {
        repsUnit = 'm';
      } else if (repsUnit == 'secs') {
        repsUnit = 's';
      } else {
        repsUnit = '';
      }
      title = title + " " + weight + "×" + reps + repsUnit;
    }
    return title;
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    this.selectedDate = WorkOutUtilPage.combineDateInfo(event.startTime);
    this.navCtrl.push('InputWorkOutDetailPage', {
      workOutMenu: event.workOutResult.workOutMenu,
      date: this.selectedDate,
      part: "unknown"
    });
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  startInput() {
    this.goToBodypart(this.selectedDate);
  }
  moveToTargetDate(date) {
    var workOutDate = WorkOutUtilPage.splitDateInfo(date);
    var time = new Date(Date.UTC(workOutDate.workOutYear, workOutDate.workOutMonth - 1, workOutDate.workOutDay));
    this.calendar.currentDate = time;
  }

  onTimeSelected(ev) {
    this.selectedDate = WorkOutUtilPage.combineDateInfo(ev.selectedTime);
  }
  today() {
    this.calendar.currentDate = new Date();
  }
  onCurrentDateChanged(event: Date) {
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };
}
