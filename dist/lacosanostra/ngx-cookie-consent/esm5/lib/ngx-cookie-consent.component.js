/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
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
                    styles: [":host{display:none;-webkit-box-align:center;align-items:center}:host.visible{display:-webkit-box;display:flex}:host .cookie-consent-content{-webkit-box-flex:1;flex-grow:1}"]
                }] }
    ];
    NgxCookieConsentComponent.propDecorators = {
        visible: [{ type: HostBinding, args: ['class.visible',] }]
    };
    return NgxCookieConsentComponent;
}());
export { NgxCookieConsentComponent };
if (false) {
    /** @type {?} */
    NgxCookieConsentComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    NgxCookieConsentComponent.prototype.signature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsYWNvc2Fub3N0cmEvbmd4LWNvb2tpZS1jb25zZW50LyIsInNvdXJjZXMiOlsibGliL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9EO0lBQUE7UUFhZ0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUN0QyxjQUFTLEdBQUcsdUJBQXVCLENBQUM7SUFjOUMsQ0FBQzs7OztJQVpRLDRDQUFROzs7SUFBZjs7WUFDUSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssTUFBTTtRQUNoRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRU0seUNBQUs7OztJQUFaO1FBQ0UsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7O2dCQTFCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsUUFBUSxFQUFFLHFQQU9UOztpQkFFRjs7OzBCQUVFLFdBQVcsU0FBQyxlQUFlOztJQWU5QixnQ0FBQztDQUFBLEFBNUJELElBNEJDO1NBaEJZLHlCQUF5Qjs7O0lBQ3BDLDRDQUE4Qzs7Ozs7SUFDOUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtY29va2llLWNvbnNlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeSBjb29raWUtY29uc2VudC1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlIGNvb2tpZSBjb25zZW50XCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neENvb2tpZUNvbnNlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZpc2libGUnKSB2aXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgc2lnbmF0dXJlID0gJ2Nvb2tpZS1jb25zZW50LWNsb3NlZCc7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2xvc2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zaWduYXR1cmUpID09PSAndHJ1ZSc7XG4gICAgaWYgKCFpc0Nsb3NlZCkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zaWduYXR1cmUsICd0cnVlJyk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxufVxuIl19