import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';

@NgModule({
  declarations: [NgxCookieConsentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [NgxCookieConsentComponent]
})
export class NgxCookieConsentModule { }
