import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputDropdownSearchComponent } from './text-input-dropdown-search.component';

describe('TextInputDropdownSearchComponent', () => {
  let component: TextInputDropdownSearchComponent;
  let fixture: ComponentFixture<TextInputDropdownSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextInputDropdownSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInputDropdownSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
