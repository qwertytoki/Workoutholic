import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputWorkOutDetailPage } from './input-work-out-detail';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    InputWorkOutDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InputWorkOutDetailPage),
    TranslateModule.forChild(),
    HttpClientModule,
    MultiPickerModule,
  ],
})
export class InputWorkOutDetailPageModule {}
