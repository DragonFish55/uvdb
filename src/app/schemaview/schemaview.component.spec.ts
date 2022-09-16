import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaviewComponent } from './schemaview.component';

describe('SchemaviewComponent', () => {
  let component: SchemaviewComponent;
  let fixture: ComponentFixture<SchemaviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
