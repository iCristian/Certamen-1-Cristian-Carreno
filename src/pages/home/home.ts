import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    })
  }

  setLanguage(lng) {
    this.translate.use(lng);
  }

}
