import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditbooksComponent } from './addeditbooks.component';

describe('AddeditbooksComponent', () => {
  let component: AddeditbooksComponent;
  let fixture: ComponentFixture<AddeditbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
