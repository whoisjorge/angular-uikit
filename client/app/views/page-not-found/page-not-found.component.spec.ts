import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFound } from './page-not-found.component';

describe('PageNotFound', () => {
  let component: PageNotFound;
  let fixture: ComponentFixture<PageNotFound>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFound ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
