import {
  getTestBed,
  TestBed,
  async
} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {
  HttpClient as NgHttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';

import { HttpClient, HTTP_VERBS } from 'app/services';

describe('HttpClient Service Methods', () => {
  let httpClient: HttpClient;
  let http: NgHttpClient;
  let baseOptions;
  const testTokenVal = 'test';

  const mockHttp = class {
    request = jasmine.createSpy('request').and.returnValue(Observable.from([new HttpResponse()]));
  };

  beforeEach(async(() => {
    baseOptions = {
      headers: undefined,
      params: undefined,
      body: undefined,
      observe: 'response',
      responseType: 'json',
      reportProgress: false,
      withCredentials: false
    };

    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        HttpClient,
        {
          provide: NgHttpClient,
          useClass: mockHttp
        }
      ]
    });

    const testBed = getTestBed();
    httpClient = testBed.get(HttpClient);
    http = testBed.get(NgHttpClient);
  }));

  it('should perform GET request', () => {
    httpClient.get('').subscribe(() => {
      const options = {
        ...baseOptions,
        body: null
      };

      expect(http.request).toHaveBeenCalledWith(HTTP_VERBS.get, '', options);
    });
  });

  it('should perform POST request', () => {
    httpClient.post('', {}).subscribe(() => {
      const options = {
        ...baseOptions,
        body: {}
      };

      expect(http.request).toHaveBeenCalledWith(HTTP_VERBS.post, '', options);
    });
  });

  it('should perform PUT request', () => {
    httpClient.put('', {}).subscribe(() => {
      const options = {
        ...baseOptions,
        body: {}
      };

      expect(http.request).toHaveBeenCalledWith(HTTP_VERBS.put, '', options);
    });
  });

  it('should perform DELETE request', () => {
    httpClient.delete('').subscribe(() => {
      const options = {
        ...baseOptions,
        body: null
      };

      expect(http.request).toHaveBeenCalledWith(HTTP_VERBS.delete, '', options);
    });
  });

  it('should perform PATCH request', () => {
    httpClient.patch('', {}).subscribe(() => {
      const options = {
        ...baseOptions,
        body: {}
      };

      expect(http.request).toHaveBeenCalledWith(HTTP_VERBS.patch, '', options);
    });
  });

  it('should perform HEAD request', () => {
    httpClient.head('').subscribe(() => {
      const options = {
        ...baseOptions,
        body: null
      };

      expect(http.request).toHaveBeenCalledWith(HTTP_VERBS.head, '', options);
    });
  });
});
