import { Component, HostBinding, NgModule } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

class NgxCookieConsentComponent {
    constructor(platform) {
        this.platform = platform;
        this.visible = false;
        this.signature = 'cookie-consent-closed';
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        const isClosed = localStorage.getItem(this.signature) === 'true';
        if (!isClosed) {
            this.visible = true;
        }
    }
    close() {
        localStorage.setItem(this.signature, 'true');
        this.visible = false;
    }
}
NgxCookieConsentComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-cookie-consent',
                template: `
    <div class="mat-typography cookie-consent-content">
      <ng-content></ng-content>
    </div>
    <button mat-icon-button aria-label="Close cookie consent" (click)="close()">
      <mat-icon>close</mat-icon>
    </button>
  `,
                styles: [":host{align-items:center;display:none}:host.visible{display:flex}:host .cookie-consent-content{flex-grow:1}"]
            },] }
];
NgxCookieConsentComponent.ctorParameters = () => [
    { type: Platform }
];
NgxCookieConsentComponent.propDecorators = {
    visible: [{ type: HostBinding, args: ['class.visible',] }]
};

class NgxCookieConsentModule {
}
NgxCookieConsentModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxCookieConsentComponent],
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule
                ],
                exports: [NgxCookieConsentComponent]
            },] }
];

/*
 * Public API Surface of ngx-cookie-consent
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCookieConsentComponent, NgxCookieConsentModule };
//# sourceMappingURL=lacosanostra-ngx-cookie-consent.js.map
