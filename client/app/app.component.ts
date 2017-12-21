import { Component, OnInit } from '@angular/core';

// Services
// import { ConfigService } from '@ngx-config/core';
// import { MetaService } from '@ngx-meta/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'application',
  styleUrls: ['./app.component.scss'],
  template:
          `
          <div class="uk-offcanvas-content">
            <router-outlet></router-outlet>
          </div>
          `

})
export class AppComponent implements OnInit {

  // title: string;

  // constructor(private readonly config: ConfigService,
  //             private readonly translate: TranslateService,
  //             private readonly meta: MetaService) { }

  ngOnInit() { }

}
