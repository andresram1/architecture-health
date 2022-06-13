import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoStatusComponent } from './repo-status.component';

describe('RepoStatusComponent', () => {
  let component: RepoStatusComponent;
  let fixture: ComponentFixture<RepoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
