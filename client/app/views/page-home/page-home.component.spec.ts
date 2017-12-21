import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHome } from './page-home.component';

describe('HomeComponent', () => {
  let component: PageHome;
  let fixture: ComponentFixture<PageHome>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHome ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
