import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemasectionComponent } from './schemasection.component';

describe('SchemasectionComponent', () => {
  let component: SchemasectionComponent;
  let fixture: ComponentFixture<SchemasectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemasectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemasectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
