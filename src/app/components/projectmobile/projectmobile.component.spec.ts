import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmobileComponent } from './projectmobile.component';

describe('ProjectmobileComponent', () => {
  let component: ProjectmobileComponent;
  let fixture: ComponentFixture<ProjectmobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectmobileComponent]
    });
    fixture = TestBed.createComponent(ProjectmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
