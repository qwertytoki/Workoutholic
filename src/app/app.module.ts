import { NgModule, ErrorHandler,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { AddMenuPage } from '../pages/add-menu/add-menu';
// import { AddThemePage } from '../pages/add-theme/add-theme';
// import { WorkOutUtilPage } from '../pages/work-out-util/work-out-util';
// import { BodyPartSelectionPage} from '../pages/body-part-selection/body-part-selection'
// import { InputWorkOutPage} from '../pages/input-work-out/input-work-out'
// import { InputWorkOutDetailPage} from '../pages/input-work-out-detail/input-work-out-detail'

import { NgCalendarModule } from 'ionic2-calendar';

//for multi lunguage
//import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// for Instagram
// import { Instagram } from '@ionic-native/instagram';
// import { Camera } from '@ionic-native/camera';

//import { Screenshot } from '@ionic-native/screenshot';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage
    // WorkOutUtilPage,
    // BodyPartSelectionPage,
    // // InputWorkOutPage,
    // InputWorkOutDetailPage,
    // AddMenuPage,
    // AddThemePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    NgCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: undefined }

    ]
  })
export class AppModule {}
