import { Component, HostBinding, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCookieConsentComponent {
    constructor() {
        this.visible = false;
        this.signature = 'cookie-consent-closed';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isClosed = localStorage.getItem(this.signature) === 'true';
        if (!isClosed) {
            this.visible = true;
        }
    }
    /**
     * @return {?}
     */
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
                styles: [":host{display:none;align-items:center}:host.visible{display:flex}:host .cookie-consent-content{flex-grow:1}"]
            }] }
];
NgxCookieConsentComponent.propDecorators = {
    visible: [{ type: HostBinding, args: ['class.visible',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCookieConsentModule {
}
NgxCookieConsentModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxCookieConsentComponent],
                imports: [
                    BrowserAnimationsModule,
                    MatIconModule,
                    MatButtonModule
                ],
                exports: [NgxCookieConsentComponent]
            },] }
];

export { NgxCookieConsentComponent, NgxCookieConsentModule };
//# sourceMappingURL=lacosanostra-ngx-cookie-consent.js.map