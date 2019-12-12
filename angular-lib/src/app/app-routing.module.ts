import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpandableListviewComponent } from './components/expandable-listview/expandable-listview.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: 'app-root', component: AppComponent },
  { path: 'app-tabs', component: TabsComponent },
  { path: 'app-elv', component: ExpandableListviewComponent },
  { path: 'app-tooltip', component: TooltipComponent },
  { path: 'app-loading-spinner', component: LoadingSpinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
