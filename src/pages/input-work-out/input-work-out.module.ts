import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputWorkOutPage } from './input-work-out';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    InputWorkOutPage,
  ],
  imports: [
    IonicPageModule.forChild(InputWorkOutPage),
    TranslateModule.forChild(),
    HttpClientModule,
  ],
})
export class InputWorkOutPageModule {}
