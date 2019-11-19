import { Component, HostBinding, NgModule } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxCookieConsentComponent = /** @class */ (function () {
    function NgxCookieConsentComponent(platform) {
        this.platform = platform;
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
        if (!this.platform.isBrowser) {
            return;
        }
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
                    styles: [":host{display:none;-webkit-box-align:center;align-items:center}:host.visible{display:-webkit-box;display:flex}:host .cookie-consent-content{-webkit-box-flex:1;flex-grow:1}"]
                }] }
    ];
    /** @nocollapse */
    NgxCookieConsentComponent.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    NgxCookieConsentComponent.propDecorators = {
        visible: [{ type: HostBinding, args: ['class.visible',] }]
    };
    return NgxCookieConsentComponent;
}());
if (false) {
    /** @type {?} */
    NgxCookieConsentComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    NgxCookieConsentComponent.prototype.signature;
    /**
     * @type {?}
     * @private
     */
    NgxCookieConsentComponent.prototype.platform;
}

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
                        CommonModule,
                        MatIconModule,
                        MatButtonModule
                    ],
                    exports: [NgxCookieConsentComponent]
                },] }
    ];
    return NgxCookieConsentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCookieConsentComponent, NgxCookieConsentModule };
//# sourceMappingURL=lacosanostra-ngx-cookie-consent.js.map
