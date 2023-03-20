import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancestudComponent } from './attendancestud.component';

describe('AttendancestudComponent', () => {
  let component: AttendancestudComponent;
  let fixture: ComponentFixture<AttendancestudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancestudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendancestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
