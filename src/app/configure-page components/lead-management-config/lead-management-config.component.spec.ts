import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadManagementConfigComponent } from './lead-management-config.component';

describe('LeadManagementConfigComponent', () => {
  let component: LeadManagementConfigComponent;
  let fixture: ComponentFixture<LeadManagementConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadManagementConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadManagementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
