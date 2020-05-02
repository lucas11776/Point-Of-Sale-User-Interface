import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { RxReactiveFormsModule, } from '@rxweb/reactive-form-validators';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule, RxReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement;
  });

  it('should create login component.', () => {
    expect(component).toBeTruthy();
  });

  it('should display invalid email error message if email is invalid.', () => {
    component.control('email').setValue('thembangubeni#gmail.com');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The email is invalid.');
  });

  it('should display email required error is email is empty', () => {
    component.control('email').setValue('');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The email is required to login.');
  });

  it('should display invalid credentials is password is less then 8 charactors.', () => {
    component.control('email').setValue('passwor');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The login credentials are invalid.');
  });

  it('should display invalid credentials is password is more then 20 charactors..', () => {
    component.control('password').setValue('t&jd9038710nmfle^39*%'); // 21 charactors
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The login credentials are invalid.');
  });
});
