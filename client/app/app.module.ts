import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Router
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Pages
import { PageDownload } from './views/page-download/page-download.component';
import { PageHome } from './views/page-home/page-home.component';
import { PageTest } from './views/page-test/page-test.component';
import { PageNotFound } from './views/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    // Pages
    PageDownload,
    PageHome,
    PageTest,
    PageNotFound
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
