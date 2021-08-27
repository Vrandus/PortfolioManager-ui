import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { MarketMoversComponent } from './market-movers/market-movers.component';
import { InsightsComponent } from './insights/insights.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AccountsTableComponent } from './accounts/accounts-table/accounts-table.component';
import { GainersComponent } from './market-movers/gainers/gainers.component';
import { LosersComponent } from './market-movers/losers/losers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountsComponent,
    NetWorthComponent,
    MarketMoversComponent,
    InsightsComponent,
    GainersComponent,
    LosersComponent,
    AccountsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    MatIconModule,
    HttpClientModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
