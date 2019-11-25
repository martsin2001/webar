import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagePreviewComponent } from './main-page-preview.component';

describe('MainPagePreviewComponent', () => {
  let component: MainPagePreviewComponent;
  let fixture: ComponentFixture<MainPagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
