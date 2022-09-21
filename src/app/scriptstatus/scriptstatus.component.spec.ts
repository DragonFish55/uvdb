import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptstatusComponent } from './scriptstatus.component';

describe('ScriptstatusComponent', () => {
  let component: ScriptstatusComponent;
  let fixture: ComponentFixture<ScriptstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
