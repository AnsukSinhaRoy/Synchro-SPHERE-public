import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRelationshipManagementConfigComponent } from './customer-relationship-management-config.component';

describe('CustomerRelationshipManagementConfigComponent', () => {
  let component: CustomerRelationshipManagementConfigComponent;
  let fixture: ComponentFixture<CustomerRelationshipManagementConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRelationshipManagementConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerRelationshipManagementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
