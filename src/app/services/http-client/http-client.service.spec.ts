import {
  getTestBed,
  TestBed,
  async
} from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import {
  Http,
  Headers,
  Response,
  Request,
  RequestOptions,
  ResponseOptions
} from '@angular/http';
import { HttpClient } from 'app/services';
import { Observable } from 'rxjs/Rx';

describe('HttpClient Service Methods', () => {
  let httpClient: HttpClient;
  let http: Http;
  const testTokenVal = 'test';
  const bearerTestTokenVal = `Bearer ${testTokenVal}`;

  const mockHttp = class {
    request = jasmine.createSpy('request').and.returnValue(Observable.from([new Response(new ResponseOptions())]));
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        HttpClient,
        {
          provide: Http,
          useClass: mockHttp
        }
      ]
    });

    localStorage.setItem('token', testTokenVal);
    const testBed = getTestBed();
    httpClient = testBed.get(HttpClient);
    http = testBed.get(Http);
  }));

  it('should perform GET request', () => {
    httpClient.get('').subscribe(() => {
      const reqOptions = new RequestOptions({
        method: 'GET',
        url: '',
        body: null
      });

      reqOptions.headers = new Headers();
      // reqOptions.headers.set('Authorization', bearerTestTokenVal);
      expect(http.request).toHaveBeenCalledWith(new Request(reqOptions));
    });
  });

  it('should perform POST request', () => {
    httpClient.post('', {}).subscribe(() => {
      const reqOptions = new RequestOptions({
        method: 'POST',
        url: '',
        body: {}
      });

      reqOptions.headers = new Headers();
      // reqOptions.headers.set('Authorization', bearerTestTokenVal);
      expect(http.request).toHaveBeenCalledWith(new Request(reqOptions));
    });
  });

  it('should perform PUT request', () => {
    httpClient.put('', {}).subscribe(() => {
      const reqOptions = new RequestOptions({
        method: 'PUT',
        url: '',
        body: {}
      });

      reqOptions.headers = new Headers();
      // reqOptions.headers.set('Authorization', bearerTestTokenVal);
      expect(http.request).toHaveBeenCalledWith(new Request(reqOptions));
    });
  });

  it('should perform DELETE request', () => {
    httpClient.delete('').subscribe(() => {
      const reqOptions = new RequestOptions({
        method: 'DELETE',
        url: '',
        body: null
      });

      reqOptions.headers = new Headers();
      // reqOptions.headers.set('Authorization', bearerTestTokenVal);
      expect(http.request).toHaveBeenCalledWith(new Request(reqOptions));
    });
  });

  it('should perform PATCH request', () => {
    httpClient.patch('', {}).subscribe(() => {
      const reqOptions = new RequestOptions({
        method: 'PATCH',
        url: '',
        body: {}
      });

      reqOptions.headers = new Headers();
      // reqOptions.headers.set('Authorization', bearerTestTokenVal);
      expect(http.request).toHaveBeenCalledWith(new Request(reqOptions));
    });
  });

  it('should perform HEAD request', () => {
    httpClient.head('', {}).subscribe(() => {
      const reqOptions = new RequestOptions({
        method: 'HEAD',
        url: '',
        body: null
      });

      reqOptions.headers = new Headers();
      // reqOptions.headers.set('Authorization', bearerTestTokenVal);
      expect(http.request).toHaveBeenCalledWith(new Request(reqOptions));
    });
  });

  afterAll(function() {
    localStorage.removeItem('token');
  });
});
