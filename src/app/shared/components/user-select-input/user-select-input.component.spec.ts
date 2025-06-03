import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSelectInputComponent } from './user-select-input.component';

describe('UserSelectInputComponent', () => {
  let component: UserSelectInputComponent;
  let fixture: ComponentFixture<UserSelectInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSelectInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
