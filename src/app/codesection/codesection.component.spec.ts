import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesectionComponent } from './codesection.component';

describe('CodesectionComponent', () => {
  let component: CodesectionComponent;
  let fixture: ComponentFixture<CodesectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodesectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
