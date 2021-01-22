import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationsPageComponent } from './nominations-page.component';

describe('NominationsPageComponent', () => {
  let component: NominationsPageComponent;
  let fixture: ComponentFixture<NominationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
