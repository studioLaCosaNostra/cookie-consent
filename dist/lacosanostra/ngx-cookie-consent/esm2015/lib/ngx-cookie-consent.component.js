/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
export class NgxCookieConsentComponent {
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
                styles: [":host{display:none;-webkit-box-align:center;align-items:center}:host.visible{display:-webkit-box;display:flex}:host .cookie-consent-content{-webkit-box-flex:1;flex-grow:1}"]
            }] }
];
NgxCookieConsentComponent.propDecorators = {
    visible: [{ type: HostBinding, args: ['class.visible',] }]
};
if (false) {
    /** @type {?} */
    NgxCookieConsentComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    NgxCookieConsentComponent.prototype.signature;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsYWNvc2Fub3N0cmEvbmd4LWNvb2tpZS1jb25zZW50LyIsInNvdXJjZXMiOlsibGliL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYy9ELE1BQU0sT0FBTyx5QkFBeUI7SUFadEM7UUFhZ0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUN0QyxjQUFTLEdBQUcsdUJBQXVCLENBQUM7SUFjOUMsQ0FBQzs7OztJQVpRLFFBQVE7O2NBQ1AsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU07UUFDaEUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVNLEtBQUs7UUFDVixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7R0FPVDs7YUFFRjs7O3NCQUVFLFdBQVcsU0FBQyxlQUFlOzs7O0lBQTVCLDRDQUE4Qzs7Ozs7SUFDOUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtY29va2llLWNvbnNlbnQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJtYXQtdHlwb2dyYXBoeSBjb29raWUtY29uc2VudC1jb250ZW50XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlIGNvb2tpZSBjb25zZW50XCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICAgIDxtYXQtaWNvbj5jbG9zZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL25neC1jb29raWUtY29uc2VudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neENvb2tpZUNvbnNlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZpc2libGUnKSB2aXNpYmxlID0gZmFsc2U7XG4gIHByaXZhdGUgc2lnbmF0dXJlID0gJ2Nvb2tpZS1jb25zZW50LWNsb3NlZCc7XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2xvc2VkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zaWduYXR1cmUpID09PSAndHJ1ZSc7XG4gICAgaWYgKCFpc0Nsb3NlZCkge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zaWduYXR1cmUsICd0cnVlJyk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gIH1cblxufVxuIl19