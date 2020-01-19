import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpandableListviewComponent } from './components/expandable-listview/expandable-listview.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { LinksComponent } from './components/links/links.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'app-links', component: LinksComponent },
  { path: 'app-tabs', component: TabsComponent },
  { path: 'app-elv', component: ExpandableListviewComponent },
  { path: 'app-tooltip', component: TooltipComponent },
  { path: 'app-loading-spinner', component: LoadingSpinnerComponent },
  { path: 'app-progress-bar', component: ProgressBarComponent },
  { path: 'app-slider', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
