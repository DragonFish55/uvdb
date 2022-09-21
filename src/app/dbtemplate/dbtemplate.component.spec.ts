import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtemplateComponent } from './dbtemplate.component';

describe('DbtemplateComponent', () => {
  let component: DbtemplateComponent;
  let fixture: ComponentFixture<DbtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbtemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
