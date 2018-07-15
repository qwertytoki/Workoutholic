import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkOutDictPage } from './work-out-dict';

@NgModule({
  declarations: [
    WorkOutDictPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkOutDictPage),
  ],
})
export class WorkOutDictPageModule {}
