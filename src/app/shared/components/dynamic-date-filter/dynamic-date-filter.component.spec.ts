import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDateFilterComponent } from './dynamic-date-filter.component';

describe('DynamicDateFilterComponent', () => {
  let component: DynamicDateFilterComponent;
  let fixture: ComponentFixture<DynamicDateFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicDateFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
