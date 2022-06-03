import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathproblemComponent } from './mathproblem.component';

describe('MathproblemComponent', () => {
  let component: MathproblemComponent;
  let fixture: ComponentFixture<MathproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathproblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
