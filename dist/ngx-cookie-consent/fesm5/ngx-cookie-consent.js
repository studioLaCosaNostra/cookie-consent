import { Component, HostBinding, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxCookieConsentComponent = /** @class */ (function () {
    function NgxCookieConsentComponent() {
        this.visible = false;
        this.signature = 'cookie-consent-closed';
    }
    /**
     * @return {?}
     */
    NgxCookieConsentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isClosed = localStorage.getItem(this.signature) === 'true';
        if (!isClosed) {
            this.visible = true;
        }
    };
    /**
     * @return {?}
     */
    NgxCookieConsentComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        localStorage.setItem(this.signature, 'true');
        this.visible = false;
    };
    NgxCookieConsentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ngx-cookie-consent',
                    template: "\n    <div class=\"mat-typography cookie-consent-content\">\n      <ng-content></ng-content>\n    </div>\n    <button mat-icon-button aria-label=\"Close cookie consent\" (click)=\"close()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  ",
                    styles: [":host{display:none;align-items:center}:host.visible{display:flex}:host .cookie-consent-content{flex-grow:1}"]
                }] }
    ];
    NgxCookieConsentComponent.propDecorators = {
        visible: [{ type: HostBinding, args: ['class.visible',] }]
    };
    return NgxCookieConsentComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxCookieConsentModule = /** @class */ (function () {
    function NgxCookieConsentModule() {
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
    return NgxCookieConsentModule;
}());

export { NgxCookieConsentComponent, NgxCookieConsentModule };
//# sourceMappingURL=ngx-cookie-consent.js.map
