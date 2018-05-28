import { Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure:false
})
export class TimeAgoPipe implements PipeTransform , OnDestroy {
  private timer:number;
  constructor(private ChangeDetectorRef:ChangeDetectorRef, private NgZone: NgZone){}
  transform(value:string) {
    this.removeTimer();
    let t = new Date(value);
    let rightNow = new Date();
    let seconds = Math.round(Math.abs((rightNow.getTime()-t.getTime())/1000));
    let postToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) *1000;
    this.timer = this.NgZone.runOutsideAngular(()=> {
      if(typeof window !== 'undefined') {
        return window.setTimeout(()=> {
          this.NgZone.run(()=>this.ChangeDetectorRef.markForCheck());
        },postToUpdate);
      }
      return null;
    });
    let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days/30.416));
		let years = Math.round(Math.abs(days/365));
    if (Number.isNaN(seconds)){
			return '';
		} else if (seconds <= 45) {
			return 'a few seconds ago';
		} else if (seconds <= 90) {
			return 'a minute ago';
		} else if (minutes <= 45) {
			return minutes + ' minutes ago';
		} else if (minutes <= 90) {
			return 'an hour ago';
		} else if (hours <= 22) {
			return hours + ' hours ago';
		} else if (hours <= 36) {
			return 'a day ago';
		} else if (days <= 25) {
			return days + ' days ago';
		} else if (days <= 45) {
			return 'a month ago';
		} else if (days <= 345) {
			return months + ' months ago';
		} else if (days <= 545) {
			return 'a year ago';
		} else { // (days > 545)
			return years + ' years ago';
		}
	}
    ngOnDestroy(): void {
      this.removeTimer();
    }
    private removeTimer(){
      if(this.timer){
        window.clearTimeout(this.timer);
        this.timer = null;
      }
    }
    private getSecondsUntilUpdate(seconds:number) {
      let min = 60;
      let hr = min * 60;
      let day = hr * 24;
      if(seconds < min){
        return 3;
      } else if (seconds < hr) {
        return 30;
      } else if (seconds < day) {
        return 300;
      } else {
        return 3600;
      }
    }
  }