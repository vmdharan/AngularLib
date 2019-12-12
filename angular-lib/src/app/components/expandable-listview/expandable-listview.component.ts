import { Component, OnInit } from '@angular/core';

export class ELVStructure {
  public id: number;
  public header: string;
  public content: string;
  public show: boolean;
}

@Component({
  selector: 'app-elv',
  templateUrl: './expandable-listview.component.html',
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
    this.elv.forEach(f => f.show = false);
    this.elv.find(t => t.id == tabId).show = true;
  }
}
