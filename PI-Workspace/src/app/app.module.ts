import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './views/home/home.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FooterbarComponent } from './components/footerbar/footerbar.component';
import { HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    NavigatorComponent,
    FooterbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
