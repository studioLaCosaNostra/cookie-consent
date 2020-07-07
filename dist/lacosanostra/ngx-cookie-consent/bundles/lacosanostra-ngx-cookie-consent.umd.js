(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon')) :
  typeof define === 'function' && define.amd ? define('@lacosanostra/ngx-cookie-consent', ['exports', '@angular/core', '@angular/cdk/platform', '@angular/common', '@angular/material/button', '@angular/material/icon'], factory) :
  (global = global || self, factory((global.lacosanostra = global.lacosanostra || {}, global.lacosanostra['ngx-cookie-consent'] = {}), global.ng.core, global.ng.cdk.platform, global.ng.common, global.ng.material.button, global.ng.material.icon));
}(this, (function (exports, core, platform, common, button, icon) { 'use strict';

  var NgxCookieConsentComponent = /** @class */ (function () {
      function NgxCookieConsentComponent(platform) {
          this.platform = platform;
          this.visible = false;
          this.signature = 'cookie-consent-closed';
      }
      NgxCookieConsentComponent.prototype.ngOnInit = function () {
          if (!this.platform.isBrowser) {
              return;
          }
          var isClosed = localStorage.getItem(this.signature) === 'true';
          if (!isClosed) {
              this.visible = true;
          }
      };
      NgxCookieConsentComponent.prototype.close = function () {
          localStorage.setItem(this.signature, 'true');
          this.visible = false;
      };
      return NgxCookieConsentComponent;
  }());
  NgxCookieConsentComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'lib-ngx-cookie-consent',
                  template: "\n    <div class=\"mat-typography cookie-consent-content\">\n      <ng-content></ng-content>\n    </div>\n    <button mat-icon-button aria-label=\"Close cookie consent\" (click)=\"close()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  ",
                  styles: [":host{align-items:center;display:none}:host.visible{display:flex}:host .cookie-consent-content{flex-grow:1}"]
              },] }
  ];
  NgxCookieConsentComponent.ctorParameters = function () { return [
      { type: platform.Platform }
  ]; };
  NgxCookieConsentComponent.propDecorators = {
      visible: [{ type: core.HostBinding, args: ['class.visible',] }]
  };

  var NgxCookieConsentModule = /** @class */ (function () {
      function NgxCookieConsentModule() {
      }
      return NgxCookieConsentModule;
  }());
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

  /*
   * Public API Surface of ngx-cookie-consent
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.NgxCookieConsentComponent = NgxCookieConsentComponent;
  exports.NgxCookieConsentModule = NgxCookieConsentModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lacosanostra-ngx-cookie-consent.umd.js.map
