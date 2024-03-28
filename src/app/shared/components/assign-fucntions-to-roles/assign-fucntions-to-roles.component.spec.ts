import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFucntionsToRolesComponent } from './assign-fucntions-to-roles.component';

describe('AssignFucntionsToRolesComponent', () => {
  let component: AssignFucntionsToRolesComponent;
  let fixture: ComponentFixture<AssignFucntionsToRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignFucntionsToRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignFucntionsToRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
