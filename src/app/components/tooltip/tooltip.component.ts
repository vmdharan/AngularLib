import { Component, OnInit } from '@angular/core';

export class ToolTipStructure {
  public text: string;
  public show: boolean;
  public position: string;
} 

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  tooltip: ToolTipStructure = {
    text: "This is a tooltip!",
    show: false,
    position: "right"
  }

  constructor() { }

  ngOnInit() {
  }

  showTooltip(e) {
    this.tooltip.show = true;
  }

  hideTooltip(e) {
    this.tooltip.show = false;
  }
}
