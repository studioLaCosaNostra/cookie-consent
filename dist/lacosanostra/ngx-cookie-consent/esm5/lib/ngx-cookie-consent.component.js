/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
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
export { NgxCookieConsentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsYWNvc2Fub3N0cmEvbmd4LWNvb2tpZS1jb25zZW50LyIsInNvdXJjZXMiOlsibGliL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRDtJQWdCRSxtQ0FBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUhSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDdEMsY0FBUyxHQUFHLHVCQUF1QixDQUFDO0lBRUgsQ0FBQzs7OztJQUVuQyw0Q0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSOztZQUNLLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFTSx5Q0FBSzs7O0lBQVo7UUFDRSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUscVBBT1Q7O2lCQUVGOzs7O2dCQWJRLFFBQVE7OzswQkFlZCxXQUFXLFNBQUMsZUFBZTs7SUFvQjlCLGdDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FyQlkseUJBQXlCOzs7SUFDcEMsNENBQThDOzs7OztJQUM5Qyw4Q0FBNEM7Ozs7O0lBRWhDLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtY29va2llLWNvbnNlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeSBjb29raWUtY29uc2VudC1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlIGNvb2tpZSBjb25zZW50XCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neENvb2tpZUNvbnNlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZpc2libGUnKSB2aXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgc2lnbmF0dXJlID0gJ2Nvb2tpZS1jb25zZW50LWNsb3NlZCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNDbG9zZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnNpZ25hdHVyZSkgPT09ICd0cnVlJztcbiAgICBpZiAoIWlzQ2xvc2VkKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnNpZ25hdHVyZSwgJ3RydWUnKTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgfVxuXG59XG4iXX0=