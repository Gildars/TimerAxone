import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkingTimerPage } from './working-timer';

@NgModule({
  declarations: [
    WorkingTimerPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkingTimerPage),
  ],
})
export class WorkingTimerPageModule {}
