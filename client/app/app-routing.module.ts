import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

// Import Pages
import { PageHome }               from './views/page-home/page-home.component';
import { PageDownload }           from './views/page-download/page-download.component';
import { PageTest }               from './views/page-test/page-test.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PageHome,
    data: {
      meta: {
        title: 'Home page',
        description: 'Description of the home page'
      }
    }
  },
  { path: 'download', component: PageDownload },
  { path: 'test', component: PageTest }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
