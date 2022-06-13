import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocStatusComponent } from './doc-status.component';

describe('DocStatusComponent', () => {
  let component: DocStatusComponent;
  let fixture: ComponentFixture<DocStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
