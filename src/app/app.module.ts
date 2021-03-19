import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MissionBoardComponent } from './components/mission-board/mission-board.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CommunityHubComponent } from './components/community-hub/community-hub.component';
import { ResourceManagementComponent } from './components/resource-management/resource-management.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicAssistantComponent } from './components/topic-assistant/topic-assistant.component';
import { ResourceComponent } from './components/resource/resource.component';
import { BrandInfoComponent } from './components/brand-info/brand-info.component';


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
    ResourceManagementComponent,
    TopicAssistantComponent,
    ResourceComponent,
    BrandInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
