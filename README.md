# [![angular-uikit](.github/header.png)](https://github.com/whoisjorge/angular-uikit)

> ፨ This project is in active development, feel free to contribute! - **preview the live app [here](https://whoisjorge.github.io/angular-uikit/)** -


## Features

- [x] [Angular2+] SPA front-end project boilerplate
- [x] [UIkit3] Sass-ready as web interface framework
- [x] Production and Development [lite server] with Livereload
- [ ] [ngx-config] for global configuration management.
- [ ] [ngx-meta] for SEO title and meta tags (*including Open Graph tags for social sharing*).
- [ ] [ngx-translate] for i18n support.
- [ ] [ngx-auth] for simple JWT-based authentication.
- [ ] [ngx-i18n-router] for localized routes.
- [x] Unit tests with [Jasmine] and [Karma], including code coverage via [Istanbul].
- [x] End-to-end tests with [Protractor].
- [x] [angular-tslint-rules] as configuration preset for [TSLint] and [codelyzer].


## Prerequisites

Before moving on, make sure you have installed all of the following prerequisites on your development machine: 

* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed, neither simply [brew it!](https://brew.sh)

* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/). Then verify that you are running **node v4.x.x** or higher and **npm 3.x.x** or higher by running the commands `node -v` and `npm -v` in a terminal/console window.

* Angular-cli - You're going to use the Angular cli to build the front-end. Make sure you've installed Node.js first and then install angular cli globally using `npm install -g @angular/cli`.



### Usage

```sh
# Clone the project
git clone --depth=1 git@github.com:whoisjorge/angular-uikit.git && rm -rf angular-uikit/.git

# Install dependencies
npm i #or yarn

# run the development server
npm start
```

### Development server
Also you can run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


### Tests

#### Running unit tests
Run `ng test` to execute the unit tests via [Karma].

#### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor].



## License

This is free software; you can redistribute it and/or modify it under the terms of the MIT license. See [LICENSE](LICENSE) for details.




<!-- Thanks for watching! -->
<br><br>
<p align="center"> <sub><sup>&lt;/&gt;</sub></sup><br>
  <sub><sup><a href="http://www.whoisjorge.me">@whoisjorge</a></sup></sub>
</p>



[Angular2+]: https://angular.io/
[UIkit3]: https://getuikit.com/
[lite server]: https://github.com/johnpapa/lite-server
[Jasmine]: https://jasmine.github.io
[Karma]: https://karma-runner.github.io
[Istanbul]: https://github.com/webpack-contrib/istanbul-instrumenter-loader
[Protractor]: http://www.protractortest.org
[angular-tslint-rules]: https://github.com/fulls1z3/angular-tslint-rules
[TSLint]: https://github.com/palantir/tslint
[codelyzer]: https://github.com/mgechev/codelyzer


[ngx-config]: https://github.com/fulls1z3/ngx-config
[ngx-auth]:  https://github.com/fulls1z3/ngx-auth
[ngx-translate]: https://github.com/ngx-translate/core
[ngx-meta]: https://github.com/fulls1z3/ngx-meta
[ngx-i18n-router]: https://github.com/fulls1z3/ngx-i18n-router 
