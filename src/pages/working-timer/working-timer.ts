import {Component, ElementRef, ViewChild, Renderer2, Input} from '@angular/core';
import {IonicPage, Navbar, NavController, NavParams} from 'ionic-angular';
import {TimerProvider} from "../../providers/timer/timer";
import {TimerPage} from "../timer/timer";

@IonicPage()
@Component({
  selector: 'page-working-timer',
  templateUrl: 'working-timer.html'
})
export class WorkingTimerPage {

  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild("watchUi") watchUI: ElementRef;
  @ViewChild("controlBtn") controlBtn: ElementRef;
  @ViewChild("cc") cc: ElementRef;
  @ViewChild("tTime") tTime: ElementRef;

  public startBtn: boolean;
  constructor(
    public  navCtrl: NavController,
    public  navParams: NavParams,
    private renderer: Renderer2,
    public  timerProvider: TimerProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkingTimerPage');
    this.timerProvider.isPlaying = true;
    this.renderer.setStyle(
      this.cc.nativeElement,
      'stroke-dashoffset',
      this.timerProvider.timer.perc
    );
    this.navBar.backButtonClick = (e: UIEvent) => {
      console.log(this.startBtn);
      this.startBtn = false;
      this.timerProvider.isPlaying = false;
      this.timerProvider.reset();
      this.navCtrl.pop();
    };
    this.animateStroke();
  }

  animateStroke(){
    setTimeout(()=> {
      if (this.timerProvider.cycles.int == 0 ) {
        setTimeout(()=>{
          this.navCtrl.pop();
        },1000);
      }else {
        if (this.timerProvider.isPlaying) {
          this.timerProvider.timer.perc = this.timerProvider.timer.perc - (this.timerProvider.timer.percm / 60);
          this.renderer.setStyle(
            this.cc.nativeElement,
            'stroke-dashoffset',
            this.timerProvider.timer.perc
          );
          setTimeout(this.animateStroke(), 1000);
        } else {
          setTimeout(this.animateStroke(), 1000);
        }
      }
    }, 1000);
  }
  pause() {
    if (this.timerProvider.isPlaying) {
      this.renderer.removeClass(this.controlBtn.nativeElement, 'pause-btn');
      this.renderer.addClass(this.controlBtn.nativeElement,'play-btn');
      this.timerProvider.isPlaying = false;
    } else {
      this.renderer.removeClass(this.controlBtn.nativeElement, 'play-btn');
      this.renderer.addClass(this.controlBtn.nativeElement, 'pause-btn');
      this.timerProvider.isPlaying = true;
      this.timerProvider.startTimer();
    }
  }
}
