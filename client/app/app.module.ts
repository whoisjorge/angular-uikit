import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navigation/navigation.component';

// Pages
import { PageDownload } from './views/download/download.component';
import { PageHome } from './views/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // Pages
    PageDownload,
    PageHome
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
