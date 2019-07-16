import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NgxCookieConsentComponent', () => {
  let component: NgxCookieConsentComponent;
  let fixture: ComponentFixture<NgxCookieConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieConsentComponent ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCookieConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
