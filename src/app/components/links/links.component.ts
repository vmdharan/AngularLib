import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  main() {
    this.router.navigate(['']);
  }

  loadELV() {
    this.router.navigate(['app-elv']);
  }

  loadPB() {
    this.router.navigate(['app-progress-bar']);
  }

  loadSpinner() {
    this.router.navigate(['app-loading-spinner']);
  }

  loadTabs() {
    this.router.navigate(['app-tabs']);
  }

  loadTT() {
    this.router.navigate(['app-tooltip']);
  }

  loadSlider() {
    this.router.navigate(['app-slider']);
  }
}
