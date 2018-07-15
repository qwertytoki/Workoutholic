import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BodyPartSelectionPage } from './body-part-selection';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    BodyPartSelectionPage
  ],
  imports: [
    IonicPageModule.forChild(BodyPartSelectionPage),
    TranslateModule.forChild(),
    HttpClientModule,
  ]
})
export class BodyPartSelectionPageModule {}
