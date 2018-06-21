import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {TimerProvider} from "../../providers/timer/timer";
import {NgForm} from "@angular/forms";
import {WorkingTimerPage} from "../working-timer/working-timer";

/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
  inputs: ['start']
})

export class TimerPage {

  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild("startBtn") startBtn: ElementRef;

  public start : boolean = false;
  public text: string = "Подготовка";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public timerProvider:TimerProvider,
    private renderer: Renderer2
) {}

  ionViewDidLoad() {}

  onSubmit(form : NgForm) {
    console.log(this.startBtn);
    this.navCtrl.push(WorkingTimerPage);
    if (!this.timerProvider.isPlaying){
      this.timerProvider.timeToInt();
      this.timerProvider.startTimer();
    }
    if (!this.timerProvider.isPlaying) {
      this.renderer.removeClass(this.startBtn.nativeElement, 'play-btn');
      this.renderer.addClass(this.startBtn.nativeElement, 'pause-btn');
      this.start = true;
    }
  }
}
