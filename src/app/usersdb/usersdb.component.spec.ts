import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersdbComponent } from './usersdb.component';

describe('UsersdbComponent', () => {
  let component: UsersdbComponent;
  let fixture: ComponentFixture<UsersdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
