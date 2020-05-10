import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { of, throwError } from 'rxjs';
import { RxReactiveFormsModule, } from '@rxweb/reactive-form-validators';

import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../shared/authentication.service';
import { LoginMock, LoginFailedMock } from '../../mocks/login.mock';
import { TokenMock } from '../../mocks/token.mock';
import { TokenService } from '../../shared/token.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let element: DebugElement;
  let _auth: AuthenticationService;
  let _token: TokenService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        RxReactiveFormsModule,
      ],
      providers: [
        TokenService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();                                     
    element = fixture.debugElement;
    component = fixture.componentInstance;
    _auth = TestBed.get(AuthenticationService);
    _token = TestBed.get(TokenService);
  });

  afterEach(() => {
    _token.unset();
  });

  it('should create login component.', () => {
    expect(component).toBeTruthy();
  });

  it('should login user and redirect user to home page.', fakeAsync(() => {
    spyOn(_auth, 'login').and.callFake(() => of(TokenMock()));
    component.set(LoginMock());
    fixture.detectChanges();
    component.login();
    tick();
    expect(_token.get()).toBe(`Bearer ${TokenMock().token}`);
  }));

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

  it('should check if error data is display in the view.', fakeAsync(() => {
    spyOn(_auth, 'login').and.callFake(() => throwError(LoginFailedMock()));
    component.set(LoginMock());
    fixture.detectChanges();
    component.login();
    tick();
    fixture.detectChanges();
    expect(component.error).toEqual(LoginFailedMock());
    expect(element.nativeElement.textContent).toContain(LoginFailedMock().message);
  }));
});
