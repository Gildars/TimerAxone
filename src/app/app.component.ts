import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { timer } from 'rxjs/observable/timer';

import { ListPage } from '../pages/list/list';
import {TimerPage} from "../pages/timer/timer";
import {WorkingTimerPage} from "../pages/working-timer/working-timer";
import {TimerProvider} from "../providers/timer/timer";

@Component({
  templateUrl: 'app.html',
  providers: [TimerProvider]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showSplash = true;

  rootPage: any = TimerPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public timerProvider:TimerProvider
  ) {
   this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Создать таймер', component: TimerPage },
      { title: 'Тренировки', component: ListPage },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();  // <-- hide static image

      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
