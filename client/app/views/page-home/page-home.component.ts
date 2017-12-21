import { Component, OnInit } from '@angular/core';

declare var UIkit: any;

@Component({
  selector: 'page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHome implements OnInit {

  title:string = 'Lorem Ipsum * 10';

  constructor() { }

  ngOnInit() {

    var { $, ajax } = UIkit.util;
    ajax('https://api.github.com/repos/whoisjorge/angular-uikit?nc=' + Math.random(), {responseType: 'json'}).then(({response}) => {
      console.log(response)
      if (response && response.watchers) {
          $('[uikit-stargazers]').innerText = response.watchers;
      }
    });
    ajax(`/assets/data.json`, {responseType: 'json'}).then(({response}) => $('[uikit-version]').innerText = response.version);




  }

}
