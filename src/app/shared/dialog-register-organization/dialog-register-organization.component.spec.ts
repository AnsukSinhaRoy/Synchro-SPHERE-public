import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterOrganizationComponent } from './dialog-register-organization.component';

describe('DialogRegisterOrganizationComponent', () => {
  let component: DialogRegisterOrganizationComponent;
  let fixture: ComponentFixture<DialogRegisterOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogRegisterOrganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogRegisterOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
