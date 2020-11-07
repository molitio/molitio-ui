import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MissionBoardComponent } from './components/mission-board/mission-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CommunityHubComponent } from './components/community-hub/community-hub.component';
import { ResourceManagementComponent } from './components/resource-management/resource-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LogoComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    MissionBoardComponent,
    NavigationMenuComponent,
    MessagesComponent,
    CommunityHubComponent,
    ResourceManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
