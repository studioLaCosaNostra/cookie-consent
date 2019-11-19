import { Component, HostBinding, OnInit } from '@angular/core';

import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'lib-ngx-cookie-consent',
  template: `
    <div class="mat-typography cookie-consent-content">
      <ng-content></ng-content>
    </div>
    <button mat-icon-button aria-label="Close cookie consent" (click)="close()">
      <mat-icon>close</mat-icon>
    </button>
  `,
  styleUrls: ['./ngx-cookie-consent.component.scss']
})
export class NgxCookieConsentComponent implements OnInit {
  @HostBinding('class.visible') visible = false;
  private signature = 'cookie-consent-closed';

  constructor(private platform: Platform) {}

  public ngOnInit(): void {
    if (!this.platform.isBrowser) {
      return;
    }
    const isClosed = localStorage.getItem(this.signature) === 'true';
    if (!isClosed) {
      this.visible = true;
    }
  }

  public close(): void {
    localStorage.setItem(this.signature, 'true');
    this.visible = false;
  }

}
