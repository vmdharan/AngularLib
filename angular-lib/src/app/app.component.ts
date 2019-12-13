import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lib';

  constructor(private router: Router) {

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
