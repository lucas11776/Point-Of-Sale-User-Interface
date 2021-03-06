import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RxReactiveFormsModule, } from '@rxweb/reactive-form-validators';

import { RegisterComponent } from './register.component';
import { RegisterMock } from '../../mocks/register.mock';
import { AuthenticationService } from '../../shared/authentication.service';
import { TokenService } from '../../shared/token.service';
import { TokenMock } from '../../mocks/token.mock';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let element: DebugElement;
  let _auth: AuthenticationService;
  let _token: TokenService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterComponent,
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.set(RegisterMock())
    element = fixture.debugElement;
    _auth = TestBed.get(AuthenticationService);
    _token = TestBed.get(TokenService);
  });

  it('should register new user account and store token.', fakeAsync(() => {
    spyOn(_auth, 'register').and.callFake(() => of(TokenMock()));
    component.set(RegisterMock());
    fixture.detectChanges();
    component.register();
    expect(_token.get()).toBe(`Bearer ${TokenMock().token}`);
  }));

  it('should create register component.', () => {
    expect(component).toBeTruthy();
  });

  it('should has create account title.', () => {
    let title = element.query(By.css('h1')).nativeElement;
    expect(title.textContent).toContain('Create Your Account');
  });

  it('should display required error message if first name is required.', () => {
    component.control('first_name').setValue('');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The first name is required.');
  });

  it('should display min error message if first name is less then 3 charactors.', () => {
    component.control('first_name').setValue('Th');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The first name must have a min length of 3 charactors.');
  });

  it('should display required error message if last name is required.', () => {
    component.control('last_name').setValue('');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The last name is required.');
  });

  it('should display min error message if last name is less then 3 charactors.', () => {
    component.control('last_name').setValue('Ng');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The last name must have a min length of 3 charactors.');
  });

  it('should display required error message if email is required', () => {
    component.control('email').setValue('');
    fixture.detectChanges();
    expect(element.nativeNode.textContent).toContain('The email is required.');
  });

  it('should display invalid error message if email address is invalid.', () => {
    component.control('email').setValue('thembangubeni04#gmail.com');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The email is invalid.');
  });

  it('should display min error message if password is less then 8 charactors.', () => {
    component.control('password').setValue('passwor');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The password must have a least 8 charactors.')
  });

  it('should display max error message if password is more then 20 charactors.', () => {
    component.control('password').setValue('&dj3$gdnskYOnHldyenoT'); // 21 charactors long
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The password must have a maximum 20 charactors.');
  });

  it('should display invalid password confirmation is password confirmation does not match passwrod.', () => {
    component.control('password_confirmation').setValue('test1234');
    fixture.detectChanges();
    expect(element.nativeElement.textContent).toContain('The password confirmation does not match password.');
  });
});
