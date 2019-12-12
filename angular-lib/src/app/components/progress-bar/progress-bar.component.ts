import { Component, OnInit } from '@angular/core';

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
    for (var i = 0; i < 100000; i++) {
      this.delay(10).then(any => {
        if (this.progressBlue != 100) {
          this.progressBlue += 0.001;
        }
        if (this.progressGreen != 100) {
          this.progressGreen += 0.001;
        }
        if (this.progressRed != 100) {
          this.progressRed += 0.001;
        }
      });
    }
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => {});
  }

}
