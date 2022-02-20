import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnlyComponent } from './test-only.component';

describe('TestOnlyComponent', () => {
  let component: TestOnlyComponent;
  let fixture: ComponentFixture<TestOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
