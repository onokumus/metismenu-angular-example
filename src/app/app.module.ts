import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MetismenuAngularModule } from "@metismenu/angular";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InstallComponent } from './install/install.component';
import { HowComponent } from './how/how.component';
import { UsageComponent } from './usage/usage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InstallComponent,
    HowComponent,
    UsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MetismenuAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
