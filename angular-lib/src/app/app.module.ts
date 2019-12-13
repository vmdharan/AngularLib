import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExpandableListviewComponent } from './components/expandable-listview/expandable-listview.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ExpandableListviewComponent,
    TooltipComponent,
    LoadingSpinnerComponent,
    ProgressBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
