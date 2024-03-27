import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRolesComponent } from './enter-roles.component';

describe('EnterRolesComponent', () => {
  let component: EnterRolesComponent;
  let fixture: ComponentFixture<EnterRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterRolesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
