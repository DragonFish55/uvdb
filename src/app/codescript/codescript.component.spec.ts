import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodescriptComponent } from './codescript.component';

describe('CodescriptComponent', () => {
  let component: CodescriptComponent;
  let fixture: ComponentFixture<CodescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
