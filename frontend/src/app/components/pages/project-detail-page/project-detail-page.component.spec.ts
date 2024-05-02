import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailPageComponent } from './project-detail-page.component';

describe('ProjectDetailPageComponent', () => {
  let component: ProjectDetailPageComponent;
  let fixture: ComponentFixture<ProjectDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailPageComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
