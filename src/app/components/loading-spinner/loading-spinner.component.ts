import { Component, OnInit, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingSpinnerComponent implements OnInit {

  parts: number = 12;
  progress: number = 0.967;
  fill_bars: number = this.progress * this.parts;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(document.body, 'dim-body');
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'dim-body');
  }
}
