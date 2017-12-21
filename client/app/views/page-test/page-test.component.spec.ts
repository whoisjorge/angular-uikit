import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTest } from './page-test.component';

describe('PageTest', () => {
  let component: PageTest;
  let fixture: ComponentFixture<PageTest>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTest ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
