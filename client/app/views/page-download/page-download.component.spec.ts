import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDownload } from './page-download.component';

describe('PageDownload', () => {
  let component: PageDownload;
  let fixture: ComponentFixture<PageDownload>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDownload ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDownload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
