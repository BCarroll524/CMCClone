import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './/app-routing.module';
import { MomentModule } from 'angular2-moment/moment.module';
import { ChartModule } from 'angular2-chartjs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { RanksComponent } from './ranks/ranks.component';
import { TrendsComponent } from './trends/trends.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { SearchComponent } from './search/search.component';

// material
import { MaterialModule } from './material';

// Custom Pipes
import { AddCommasPipe } from './shared/utilities/add-commas.pipe';
import { TruncateNumPipe } from './shared/utilities/truncate-num.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    RanksComponent,
    TrendsComponent,
    AddCommasPipe,
    TruncateNumPipe,
    CoinDetailComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    MomentModule,
    ChartModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
