import { Injectable } from '@angular/core';
import {TextToSpeech } from "@ionic-native/text-to-speech";

/*
  Generated class for the TimerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerProvider {

  public timer :any = {
    timer: 'true',
    mmin : 1,
    min : 0,
    sec : 0,
    perc : 612,
    percm : 612
  };

  public isPlaying: boolean = false;

  public flashAnimate: boolean = false;

  private _status:string = 'Подготовка';
  get status():string {
    return this._status;
  }
  set status(theStatus:string) {
    this._status = theStatus;
  }


  public prepareTime   : any = {base: '2018-06-10T16:00:02.839Z', int: 10 } ;
  public approachTime  : any = {base: '2018-06-10T16:00:02.839Z', int: 30 } ;
  public relaxTime     : any = {base: '2018-06-10T16:00:02.839Z', int: 10 };
  public cycles        : any = {base: '2018-06-10T16:01:00.839Z', int: 1 };

  constructor(private tts: TextToSpeech) {}
  speak(sentence:string){
    this.tts.speak({
      text: sentence,
      rate: 1,
      locale: 'ru-RU'
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  setStatus (satus){
    this.status = status;
  }

  startTimer() {
    setTimeout(() => {
      if (this.isPlaying == true) {
        if (this.cycles.int > 0) {
          this.flashAnimate = false;
          this.timer.mmin = this.cycles.int;
          if (this.prepareTime.int > 0) {
            this.setTime(--this.prepareTime.int, this.prepareTime);
            this.timer.min = ((this.prepareTime.int / 60) >= 1) ? (this.prepareTime.int / 60).toFixed(0) : '0';
            this.timer.sec = ((this.prepareTime.int % 60) >= 1) ? (this.prepareTime.int % 60).toFixed(0) : '0';
            this.status = 'Подготовка';
            if (this.prepareTime.int == 1){
              this.status = 'Работа';
              this.speak(this.status);
              if (!this.flashAnimate){
                this.flashAnimate = true;
              }
            }
            setTimeout(this.startTimer(), 1000);
          } else if (this.approachTime.int > 0) {
            this.setTime(--this.approachTime.int, this.approachTime);
            this.timer.min = ((this.approachTime.int / 60) > 1) ? (this.approachTime.int / 60).toFixed(0) : '0';
            this.timer.sec = ((this.approachTime.int % 60) >= 1) ? (this.approachTime.int % 60).toFixed(0) : '0';
            this.status = 'Работа';
            if (this.approachTime.int == 1){
              this.status = 'Отдых';
              this.speak(this.status);
              if (!this.flashAnimate){
                this.flashAnimate = true;
              }
            }
            setTimeout(this.startTimer(), 1000);
          } else if (this.relaxTime.int > 0) {
            if (this.relaxTime.int == 1) {
              if (this.cycles.int == 1) {
                this.setTime(--this.relaxTime.int, this.relaxTime);
                this.cycles.int--;
                this.timer.min = ((this.relaxTime.int / 60) > 1) ? (this.relaxTime.int / 60).toFixed(0) : '0';
                this.timer.sec = ((this.relaxTime.int % 60) >= 1) ? (this.relaxTime.int % 60).toFixed(0) : '0';
                this.timer.mmin = this.cycles.int;
                this.status = 'Тренировка окончена';
                this.speak(this.status);
                if (!this.flashAnimate) {
                  this.flashAnimate = true;
                  this.reset();
                  this.isPlaying = false;
                  setTimeout(()=>{
                    this.flashAnimate = false;
                  },1000)
                }

              } else {
                this.setTime(--this.relaxTime.int, this.relaxTime);
                this.cycles.int--;
                this.timer.min = ((this.relaxTime.int / 60) > 1) ? (this.relaxTime.int / 60).toFixed(0) : '0';
                this.timer.sec = ((this.relaxTime.int % 60) >= 1) ? (this.relaxTime.int % 60).toFixed(0) : '0';
                this.timer.mmin = this.cycles.int;
                this.status = 'Отдых';
                if (this.relaxTime.int == 1){
                  this.status = 'Подготовка';
                  this.speak(this.status);
                  if (!this.flashAnimate){
                    this.flashAnimate = true;
                  }
                }
                setTimeout(this.startTimer(), 1000);
              }
            } else {
              this.setTime(--this.relaxTime.int, this.relaxTime);
              this.timer.min = ((this.relaxTime.int / 60) > 1) ? (this.relaxTime.int / 60).toFixed(0) : '0';
              this.timer.sec = ((this.relaxTime.int % 60) >= 1) ? (this.relaxTime.int % 60).toFixed(0) : '0';
              this.status = 'Отдых';
              setTimeout(this.startTimer(), 1000);
            }
          }
        }
      }
    }, 1000);
  }

  setTime(timeCount, base ){
    console.log(timeCount);
    let min = ((timeCount / 60) > 1) ? timeCount / 60 : '00';
    let sec = ((timeCount % 60) >= 10) ? timeCount % 60 : '0'+timeCount % 60;
    base.base = '2018-06-10T16:'+min+':'+sec+'.839Z';
  }

  timeToInt(){
    this.prepareTime.int = parseInt( this.prepareTime.base.slice(16, 1));
    if (this.prepareTime.base.slice(14, 16) == '00') {
      this.prepareTime.int = parseInt(this.prepareTime.base.slice(17, 19));
    }else {
      this.prepareTime.int = parseInt(this.prepareTime.base.slice(14, 16) + this.prepareTime.base.slice(17, 19));
    }
    if (this.approachTime.base.slice(14, 16) == '00') {
      this.approachTime.int = parseInt(this.approachTime.base.slice(17, 19));
    }else {
      this.approachTime.int = parseInt(this.approachTime.base.slice(14, 16) + this.approachTime.base.slice(17, 19));
    }
    if (this.relaxTime.base.slice(14, 16) == '00') {
      this.relaxTime.int = parseInt(this.relaxTime.base.slice(17, 19));
    }else {
      this.relaxTime.int = parseInt(this.relaxTime.base.slice(14, 16) + this.relaxTime.base.slice(17, 19));
    }
    this.cycles.int = parseInt(this.cycles.base.slice(14, 16));
  }
  reset(){

    this.timer = {
      timer: 'true',
      mmin : 1,
      min : 0,
      sec : 0,
      perc : 612,
      percm : 612
    };

    this.prepareTime    = {base: '2018-06-10T16:00:10.839Z', int: 10 } ;
    this.approachTime   = {base: '2018-06-10T16:00:30.839Z', int: 30 } ;
    this.relaxTime      = {base: '2018-06-10T16:00:10.839Z', int: 10 };
    this.cycles         = {base: '2018-06-10T16:01:00.839Z', int: 0 };
  }
}
