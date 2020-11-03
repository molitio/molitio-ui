import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { MissionBoardComponent } from './components/mission-board/mission-board.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mission-board', component: MissionBoardComponent },
  { path: '*', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
