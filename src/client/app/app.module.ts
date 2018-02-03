import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';

import { FilterPipe } from './pipes/filter.pipe';

import { SharedService } from './services/shared.service';

import { StoreModule } from '@ngrx/store';
import { searchReducer } from './reducers/search';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    StoreModule.provideStore({ searchTerm: searchReducer })
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
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
