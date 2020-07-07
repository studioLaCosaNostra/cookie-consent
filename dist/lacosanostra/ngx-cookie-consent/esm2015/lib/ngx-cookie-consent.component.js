import { Component, HostBinding } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
export class NgxCookieConsentComponent {
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
                styles: [":host{align-items:center;display:none}:host.visible{display:flex}:host .cookie-consent-content{flex-grow:1}"]
            },] }
];
NgxCookieConsentComponent.ctorParameters = () => [
    { type: Platform }
];
NgxCookieConsentComponent.propDecorators = {
    visible: [{ type: HostBinding, args: ['class.visible',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvb2tpZS1jb25zZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2xhY29zYW5vc3RyYS9uZ3gtY29va2llLWNvbnNlbnQvc3JjL2xpYi9uZ3gtY29va2llLWNvbnNlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWNqRCxNQUFNLE9BQU8seUJBQXlCO0lBSXBDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIUixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLGNBQVMsR0FBRyx1QkFBdUIsQ0FBQztJQUVILENBQUM7SUFFbkMsUUFBUTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVNLEtBQUs7UUFDVixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7R0FPVDs7YUFFRjs7O1lBYlEsUUFBUTs7O3NCQWVkLFdBQVcsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1jb29raWUtY29uc2VudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm1hdC10eXBvZ3JhcGh5IGNvb2tpZS1jb25zZW50LWNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2UgY29va2llIGNvbnNlbnRcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWNvb2tpZS1jb25zZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4Q29va2llQ29uc2VudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MudmlzaWJsZScpIHZpc2libGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzaWduYXR1cmUgPSAnY29va2llLWNvbnNlbnQtY2xvc2VkJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc0Nsb3NlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc2lnbmF0dXJlKSA9PT0gJ3RydWUnO1xuICAgIGlmICghaXNDbG9zZWQpIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc2lnbmF0dXJlLCAndHJ1ZScpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==