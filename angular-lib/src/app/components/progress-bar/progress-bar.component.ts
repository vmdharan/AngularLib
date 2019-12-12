import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  progressBlue = 0;
  progressGreen = 20;
  progressRed = 40;

  constructor() { }

  ngOnInit() {
    var tm = timer(50, 60000);
    tm.subscribe(t => {
      this.checkProgress(60000)
    });
  }

  checkProgress(dur) {
    if((dur<=0) || (this.progressBlue >= 100 && this.progressGreen >= 100 && this.progressRed >= 100)) {
      return;
    }

    var tm = timer(50, dur);
    tm.subscribe(t => {
      this.updateProgress();
      this.checkProgress(dur-50);
    });
  }

  updateProgress() : Observable<void> {
    if (this.progressBlue != 100) {
      this.progressBlue += 0.5;
    }
    if (this.progressGreen != 100) {
      this.progressGreen += 0.5;
    }
    if (this.progressRed != 100) {
      this.progressRed += 0.5;
    }

    var res: Observable<void>;
    return res;
  }

}
