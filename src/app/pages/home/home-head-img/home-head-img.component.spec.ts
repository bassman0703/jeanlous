import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeadImgComponent } from './home-head-img.component';

describe('HomeHeadImgComponent', () => {
  let component: HomeHeadImgComponent;
  let fixture: ComponentFixture<HomeHeadImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeadImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeadImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
