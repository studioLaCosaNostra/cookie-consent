import { Component, OnInit, HostBinding } from '@angular/core';

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

  public ngOnInit() {
    const isClosed = localStorage.getItem(this.signature) === 'true';
    if (!isClosed) {
      this.visible = true;
    }
  }

  public close() {
    localStorage.setItem(this.signature, 'true');
    this.visible = false;
  }

}
