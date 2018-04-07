import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { FilterPipe } from './pipes/filter.pipe';

import { SharedService } from './services/shared.service';
import { HttpService } from './services/http.service';

import { StoreModule } from '@ngrx/store';
import { searchReducer } from './reducers/search';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    StoreModule.provideStore({ search: searchReducer })
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    SettingsComponent,
    FilterPipe
  ],
  providers: [
    appRoutingProviders,
    SharedService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
