import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefertableComponent } from './refertable.component';

describe('RefertableComponent', () => {
  let component: RefertableComponent;
  let fixture: ComponentFixture<RefertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefertableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
