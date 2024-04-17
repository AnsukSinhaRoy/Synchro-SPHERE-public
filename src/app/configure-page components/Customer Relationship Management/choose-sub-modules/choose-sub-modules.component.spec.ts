import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSubModulesComponent } from './choose-sub-modules.component';

describe('ChooseSubModulesComponent', () => {
  let component: ChooseSubModulesComponent;
  let fixture: ComponentFixture<ChooseSubModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseSubModulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseSubModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
