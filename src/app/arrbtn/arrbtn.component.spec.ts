import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrbtnComponent } from './arrbtn.component';

describe('ArrbtnComponent', () => {
  let component: ArrbtnComponent;
  let fixture: ComponentFixture<ArrbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
