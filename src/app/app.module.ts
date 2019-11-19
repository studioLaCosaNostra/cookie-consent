import { Injector, NgModule } from '@angular/core';
import { NgxCookieConsentComponent, NgxCookieConsentModule } from 'projects/lacosanostra/ngx-cookie-consent/src/public-api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    NgxCookieConsentModule
  ],
  providers: [],
  entryComponents: [NgxCookieConsentComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const ngElement = createCustomElement(NgxCookieConsentComponent, {
      injector: this.injector
    });
    customElements.define('cookie-consent', ngElement);
  }
}
