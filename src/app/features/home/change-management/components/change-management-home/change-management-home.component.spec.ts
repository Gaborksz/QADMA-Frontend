import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeManagementHomeComponent } from './change-management-home.component';

describe('ChangeManagementHomeComponent', () => {
  let component: ChangeManagementHomeComponent;
  let fixture: ComponentFixture<ChangeManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeManagementHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
