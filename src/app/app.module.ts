import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UtilsService } from './providers/utils.service';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ChartsModule,

  ],
  providers: [UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
