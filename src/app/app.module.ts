import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MolitioLogoComponent } from './components/molitio-logo/molitio-logo.component';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MissionBoardComponent } from './components/mission-board/mission-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MolitioLogoComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    MissionBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
