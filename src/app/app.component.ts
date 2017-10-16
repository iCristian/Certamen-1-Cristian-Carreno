import { Globalization } from '@ionic-native/globalization';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { TranslateService } from '@ngx-translate/core';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, globalization: Globalization, statusBar: StatusBar, splashScreen: SplashScreen, private translate: TranslateService) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      translate.setDefaultLang('en');

      // translate.get('HOME.GREETING').subscribe(res => {
      //   console.log('My reuslt: ', res);
      // });
      globalization.getPreferredLanguage().then(result => {
        console.log('my result: ', result);
        var language = result.value.substring(0, 2).toLowerCase();
        translate.use(language);
      })
    });
  }
}

