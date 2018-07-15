import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMenuPage } from './add-menu';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule,HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AddMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMenuPage),
    TranslateModule.forChild(),
    HttpClientModule,
  ],
})
export class AddMenuPageModule {}
