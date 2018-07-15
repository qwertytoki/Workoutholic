import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddThemePage } from './add-theme';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AddThemePage,
  ],
  imports: [
    IonicPageModule.forChild(AddThemePage),
    TranslateModule.forChild(),
    HttpClientModule,
  ],
})
export class AddThemePageModule {}
