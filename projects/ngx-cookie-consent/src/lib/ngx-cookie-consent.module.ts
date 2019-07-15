import { NgModule } from '@angular/core';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NgxCookieConsentComponent],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [NgxCookieConsentComponent]
})
export class NgxCookieConsentModule { }
