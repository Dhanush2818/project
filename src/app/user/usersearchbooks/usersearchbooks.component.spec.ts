import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersearchbooksComponent } from './usersearchbooks.component';

describe('UsersearchbooksComponent', () => {
  let component: UsersearchbooksComponent;
  let fixture: ComponentFixture<UsersearchbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersearchbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersearchbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
