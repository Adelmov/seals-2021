import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveltwoComponent } from './leveltwo.component';

describe('LeveltwoComponent', () => {
  let component: LeveltwoComponent;
  let fixture: ComponentFixture<LeveltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeveltwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
