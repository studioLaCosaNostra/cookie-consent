import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';

describe('NgxCookieConsentComponent', () => {
  let component: NgxCookieConsentComponent;
  let fixture: ComponentFixture<NgxCookieConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCookieConsentComponent ]
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
