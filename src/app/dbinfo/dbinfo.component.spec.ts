import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbinfoComponent } from './dbinfo.component';

describe('DbinfoComponent', () => {
  let component: DbinfoComponent;
  let fixture: ComponentFixture<DbinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
