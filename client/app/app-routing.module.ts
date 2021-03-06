import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

// Import Pages
import { PageHome }               from './views/page-home/page-home.component';
import { PageDownload }           from './views/page-download/page-download.component';
import { PageTest }               from './views/page-test/page-test.component';
import { PageNotFound }           from './views/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: PageHome,
    data: {
      meta: {
        title: 'Home page',
        description: 'Description of the home page'
      }
    }
  },
  { path: 'download', component: PageDownload },
  { path: 'test', component: PageTest },
  { path: '**', component: PageNotFound }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
