import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  sliderMin: number = 1;
  sliderMax: number = 100;
  sliderValue: number = 20;
  
  constructor() { }

  ngOnInit() {
  }

}
