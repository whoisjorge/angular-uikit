import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PageDownload }           from './views/download/download.component';
import { PageHome }               from './views/home/home.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageHome },
  { path: 'download', component: PageDownload },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
