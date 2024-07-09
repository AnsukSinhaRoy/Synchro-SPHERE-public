import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function2Component } from './function2.component';

describe('Function2Component', () => {
  let component: Function2Component;
  let fixture: ComponentFixture<Function2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Function2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
