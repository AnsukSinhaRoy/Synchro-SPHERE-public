import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Function5Component } from './function5.component';

describe('Function5Component', () => {
  let component: Function5Component;
  let fixture: ComponentFixture<Function5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Function5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Function5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
