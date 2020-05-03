import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoverPageComponent } from './cover-page.component';
import { LogoutComponent } from '../../authentication/components/logout/logout.component';

describe('CoverPageComponent', () => {
  let component: CoverPageComponent;
  let fixture: ComponentFixture<CoverPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoverPageComponent,LogoutComponent],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create cover page component.', () => {
    expect(component).toBeTruthy();
  });
});
