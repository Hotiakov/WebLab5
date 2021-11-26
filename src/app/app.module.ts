import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrokersModule } from './brokers/brokers.module';
import { PropertiesModule } from './properties/properties.module';
import { StocksModule } from './stocks/stocks.module';

import { AppComponent } from './app.component';
import { TableBrokersComponent } from './brokers/table.component';
import { TableStocksComponent } from './stocks/table.component';
import { MenuComponent } from './menu.component';
import { PropertiesComponent } from './properties/properties.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'broker', component: TableBrokersComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'stocks', component: TableStocksComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrokersModule,
    PropertiesModule,
    StocksModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
