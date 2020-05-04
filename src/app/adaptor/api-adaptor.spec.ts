import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiAdaptor } from './api-adaptor';

describe('ApiAdaptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    })
  });

  it('should be created api adaptor class.', () => {
    const service: ApiAdaptor = TestBed.get(ApiAdaptor);
    expect(service).toBeTruthy();
  });
});
