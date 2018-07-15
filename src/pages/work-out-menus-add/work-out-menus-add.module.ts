import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkOutMenusAddPage } from './work-out-menus-add';

@NgModule({
  declarations: [
    WorkOutMenusAddPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkOutMenusAddPage),
  ]
})
export class WorkOutMenusAddPageModule {}
