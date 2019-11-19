import { OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
export declare class NgxCookieConsentComponent implements OnInit {
    private platform;
    visible: boolean;
    private signature;
    constructor(platform: Platform);
    ngOnInit(): void;
    close(): void;
}
