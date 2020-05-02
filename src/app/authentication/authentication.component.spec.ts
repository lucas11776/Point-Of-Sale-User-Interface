import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationComponent } from './authentication.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create authentication component.', () => {
    expect(component).toBeTruthy();
  });

  it('should check if authentication componet view has router outlet.', () => {
    expect(element.query(By.css('router-outlet')).name).toBe('router-outlet');
  });
});
