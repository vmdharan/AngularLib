import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export class ELVStructure {
  public id: number;
  public header: string;
  public content: string;
  public show: boolean;
}

@Component({
  selector: 'app-elv',
  templateUrl: './expandable-listview.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100px',
        opacity: 1,
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
      })),
      transition('open => closed', animate('0.2s')),
      transition('closed => open', animate('0.2s'))
    ])
  ],
  styleUrls: ['./expandable-listview.component.scss']
})
export class ExpandableListviewComponent implements OnInit {

  elv: ELVStructure[] = [
    {id: 1, header:"Tab1", content:"Tab1 content goes here.", show: true },
    {id: 2, header:"Tab2", content:"Tab2 content goes here.", show: false },
    {id: 3, header:"Tab3", content:"Tab3 content goes here.", show: false },
    {id: 4, header:"Tab4", content:"Tab4 content goes here.", show: false },
    {id: 5, header:"Tab5", content:"Tab5 content goes here.", show: false }
  ];

  constructor() { }

  ngOnInit() {
  }

  viewList(e, tabId) {
    let currentTab = this.elv.find(t => t.id == tabId);
    currentTab.show = !currentTab.show;
  }
}
