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
                styles: [":host{display:none;align-items:center}:host.visible{display:flex}:host .cookie-consent-content{flex-grow:1}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jb29raWUtY29uc2VudC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY29va2llLWNvbnNlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWMvRCxNQUFNLE9BQU8seUJBQXlCO0lBWnRDO1FBYWdDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDdEMsY0FBUyxHQUFHLHVCQUF1QixDQUFDO0lBYzlDLENBQUM7Ozs7SUFaUSxRQUFROztjQUNQLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNO1FBQ2hFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7O2FBRUY7OztzQkFFRSxXQUFXLFNBQUMsZUFBZTs7OztJQUE1Qiw0Q0FBOEM7Ozs7O0lBQzlDLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWNvb2tpZS1jb25zZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibWF0LXR5cG9ncmFwaHkgY29va2llLWNvbnNlbnQtY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZSBjb29raWUgY29uc2VudFwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtY29va2llLWNvbnNlbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb29raWVDb25zZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy52aXNpYmxlJykgdmlzaWJsZSA9IGZhbHNlO1xuICBwcml2YXRlIHNpZ25hdHVyZSA9ICdjb29raWUtY29uc2VudC1jbG9zZWQnO1xuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBpc0Nsb3NlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc2lnbmF0dXJlKSA9PT0gJ3RydWUnO1xuICAgIGlmICghaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc2lnbmF0dXJlLCAndHJ1ZScpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==