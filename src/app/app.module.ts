import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { NgxCookieConsentModule, NgxCookieConsentComponent } from 'ngx-cookie-consent';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
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
