(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@lacosanostra/ngx-cookie-consent', ['exports', '@angular/core', '@angular/cdk/platform', '@angular/common', '@angular/material/button', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.lacosanostra = global.lacosanostra || {}, global.lacosanostra['ngx-cookie-consent'] = {}), global.ng.core, global.ng.cdk.platform, global.ng.common, global.ng.material.button, global.ng.material.icon));
}(this, (function (exports, core, platform, common, button, icon) { 'use strict';

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
            { type: core.Component, args: [{
                        selector: 'lib-ngx-cookie-consent',
                        template: "\n    <div class=\"mat-typography cookie-consent-content\">\n      <ng-content></ng-content>\n    </div>\n    <button mat-icon-button aria-label=\"Close cookie consent\" (click)=\"close()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  ",
                        styles: [":host{display:none;-webkit-box-align:center;align-items:center}:host.visible{display:-webkit-box;display:flex}:host .cookie-consent-content{-webkit-box-flex:1;flex-grow:1}"]
                    }] }
        ];
        /** @nocollapse */
        NgxCookieConsentComponent.ctorParameters = function () { return [
            { type: platform.Platform }
        ]; };
        NgxCookieConsentComponent.propDecorators = {
            visible: [{ type: core.HostBinding, args: ['class.visible',] }]
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
            { type: core.NgModule, args: [{
                        declarations: [NgxCookieConsentComponent],
                        imports: [
                            common.CommonModule,
                            icon.MatIconModule,
                            button.MatButtonModule
                        ],
                        exports: [NgxCookieConsentComponent]
                    },] }
        ];
        return NgxCookieConsentModule;
    }());

    exports.NgxCookieConsentComponent = NgxCookieConsentComponent;
    exports.NgxCookieConsentModule = NgxCookieConsentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lacosanostra-ngx-cookie-consent.umd.js.map
