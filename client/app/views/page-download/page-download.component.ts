import { Component, OnInit } from '@angular/core';

declare var UIkit: any;

@Component({
  selector: 'page-download',
  templateUrl: './page-download.component.html',
  styleUrls: ['./page-download.component.scss']
})
export class PageDownload implements OnInit {

  constructor() { }

  ngOnInit() {

      // Autostart downloading repository from GitHub
      var { ajax } = UIkit.util;
      ajax(`/assets/data.json`, {responseType: 'json'}).then(({response}) =>
        setTimeout(() => location.href = `${response.repository}/archive/master.zip`, 100)
      );

  }


}
