import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredDeveloperComponent } from './registered-developer.component';

describe('RegisteredDeveloperComponent', () => {
  let component: RegisteredDeveloperComponent;
  let fixture: ComponentFixture<RegisteredDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredDeveloperComponent]
    });
    fixture = TestBed.createComponent(RegisteredDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
