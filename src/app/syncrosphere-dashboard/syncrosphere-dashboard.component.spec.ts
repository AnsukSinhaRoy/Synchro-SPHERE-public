import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncrosphereDashboardComponent } from './syncrosphere-dashboard.component';

describe('SyncrosphereDashboardComponent', () => {
  let component: SyncrosphereDashboardComponent;
  let fixture: ComponentFixture<SyncrosphereDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncrosphereDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SyncrosphereDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
