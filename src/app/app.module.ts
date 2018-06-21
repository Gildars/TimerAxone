import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {TextToSpeech} from "@ionic-native/text-to-speech";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TimerPage} from "../pages/timer/timer";
import { TimerProvider } from '../providers/timer/timer';
import {WorkingTimerPage} from "../pages/working-timer/working-timer";

@NgModule({
  declarations: [
    TimerPage,
    MyApp,
    HomePage,
    ListPage,
    WorkingTimerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    TimerPage,
    MyApp,
    HomePage,
    ListPage,
    WorkingTimerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimerProvider,
    TextToSpeech
  ]
})
export class AppModule {}
