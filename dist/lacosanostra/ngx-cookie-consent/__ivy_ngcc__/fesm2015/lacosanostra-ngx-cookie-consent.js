import { Component, HostBinding, NgModule } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/platform';
import * as ɵngcc2 from '@angular/material/button';
import * as ɵngcc3 from '@angular/material/icon';

const _c0 = ["*"];
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
NgxCookieConsentComponent.ɵfac = function NgxCookieConsentComponent_Factory(t) { return new (t || NgxCookieConsentComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Platform)); };
NgxCookieConsentComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NgxCookieConsentComponent, selectors: [["lib-ngx-cookie-consent"]], hostVars: 2, hostBindings: function NgxCookieConsentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵclassProp("visible", ctx.visible);
    } }, ngContentSelectors: _c0, decls: 5, vars: 0, consts: [[1, "mat-typography", "cookie-consent-content"], ["mat-icon-button", "", "aria-label", "Close cookie consent", 3, "click"]], template: function NgxCookieConsentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "button", 1);
        ɵngcc0.ɵɵlistener("click", function NgxCookieConsentComponent_Template_button_click_2_listener() { return ctx.close(); });
        ɵngcc0.ɵɵelementStart(3, "mat-icon");
        ɵngcc0.ɵɵtext(4, "close");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, directives: [ɵngcc2.MatButton, ɵngcc3.MatIcon], styles: ["[_nghost-%COMP%]{align-items:center;display:none}.visible[_nghost-%COMP%]{display:flex}[_nghost-%COMP%]   .cookie-consent-content[_ngcontent-%COMP%]{flex-grow:1}"] });
NgxCookieConsentComponent.ctorParameters = () => [
    { type: Platform }
];
NgxCookieConsentComponent.propDecorators = {
    visible: [{ type: HostBinding, args: ['class.visible',] }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxCookieConsentComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc1.Platform }]; }, { visible: [{
            type: HostBinding,
            args: ['class.visible']
        }] }); })();

class NgxCookieConsentModule {
}
NgxCookieConsentModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NgxCookieConsentModule });
NgxCookieConsentModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NgxCookieConsentModule_Factory(t) { return new (t || NgxCookieConsentModule)(); }, imports: [[
            CommonModule,
            MatIconModule,
            MatButtonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxCookieConsentModule, { declarations: function () { return [NgxCookieConsentComponent]; }, imports: function () { return [CommonModule,
        MatIconModule,
        MatButtonModule]; }, exports: function () { return [NgxCookieConsentComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NgxCookieConsentModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxCookieConsentComponent],
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatButtonModule
                ],
                exports: [NgxCookieConsentComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-cookie-consent
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxCookieConsentComponent, NgxCookieConsentModule };

//# sourceMappingURL=lacosanostra-ngx-cookie-consent.js.map