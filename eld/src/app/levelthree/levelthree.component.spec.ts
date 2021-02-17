import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelthreeComponent } from './levelthree.component';

describe('LevelthreeComponent', () => {
  let component: LevelthreeComponent;
  let fixture: ComponentFixture<LevelthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
