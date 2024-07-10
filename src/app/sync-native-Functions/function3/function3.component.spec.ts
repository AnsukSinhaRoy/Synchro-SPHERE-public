import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function3Component } from './function3.component';

describe('Function3Component', () => {
  let component: Function3Component;
  let fixture: ComponentFixture<Function3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Function3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
