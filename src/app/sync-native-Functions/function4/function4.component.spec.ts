import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function4Component } from './function4.component';

describe('Function4Component', () => {
  let component: Function4Component;
  let fixture: ComponentFixture<Function4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Function4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
