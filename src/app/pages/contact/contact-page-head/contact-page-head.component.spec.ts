import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageHeadComponent } from './contact-page-head.component';

describe('ContactPageHeadComponent', () => {
  let component: ContactPageHeadComponent;
  let fixture: ComponentFixture<ContactPageHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
