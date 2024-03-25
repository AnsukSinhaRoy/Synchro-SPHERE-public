import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelManagementConfigComponent } from './travel-management-config.component';

describe('TravelManagementConfigComponent', () => {
  let component: TravelManagementConfigComponent;
  let fixture: ComponentFixture<TravelManagementConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelManagementConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelManagementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
