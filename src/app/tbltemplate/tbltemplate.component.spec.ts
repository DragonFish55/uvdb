import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbltemplateComponent } from './tbltemplate.component';

describe('TbltemplateComponent', () => {
  let component: TbltemplateComponent;
  let fixture: ComponentFixture<TbltemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbltemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbltemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
