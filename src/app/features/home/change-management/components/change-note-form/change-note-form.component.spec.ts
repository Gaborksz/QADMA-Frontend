import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNoteFormComponent } from './change-note-form.component';

describe('ChangeNoteFormComponent', () => {
  let component: ChangeNoteFormComponent;
  let fixture: ComponentFixture<ChangeNoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeNoteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
