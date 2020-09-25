import {
  getTestBed,
  TestBed,
} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from 'app/services';
import { HttpParams } from '@angular/common/http';

describe('HttpService Methods', () => {
  let injector: TestBed;
  let httpService: HttpService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });

    injector = getTestBed();
    httpService = injector.get(HttpService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should perform GET request', () => {
    const dummyUsers = [
      { data: 'John' },
      { data: 'Doe' }
    ];

    httpService.get('get/mocks').subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne(`get/mocks`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });


  it('should perform GET request with params', () => {
    const dummyParams = new HttpParams().set('q', 'cironunes');
    httpService.get('get/mock/users', dummyParams)
      .subscribe(result => {
        expect(result.items.length).toBe(2);
      });

    const req = httpMock.expectOne(`get/mock/users?q=cironunes`);
    expect(req.request.url).toBe(`get/mock/users`);
    expect(req.request.params).toEqual(dummyParams);

    req.flush({
      incomplete_results: false,
      items: [{}, {}],
      total_count: 2
    });
  });

  it('should perform POST request', () => {
    const postData = [
      { data: 'John' },
      { data: 'Doe' }
    ];

    httpService.post('get/mocks', postData).subscribe(data => {
      expect(data).toEqual(postData);
    });

    const req = httpMock.expectOne(`get/mocks`);
    expect(req.request.method).toBe('POST');
    req.flush(postData);
  });

  it('should perform PUT request', () => {
    const putData = [
      { data: 'John' },
      { data: 'Doe' }
    ];

    httpService.put('get/mocks', putData).subscribe(data => {
      expect(data).toEqual(putData);
    });

    const req = httpMock.expectOne(`get/mocks`);
    expect(req.request.method).toBe('PUT');
    req.flush(putData);
  });

  it('should perform PATCH request', () => {
    const patchData = [
      { data: 'John' },
      { data: 'Doe' }
    ];

    httpService.patch('patch/mocks', patchData).subscribe(data => {
      expect(data).toEqual(patchData);
    });

    const req = httpMock.expectOne(`patch/mocks`);
    expect(req.request.method).toBe('PATCH');
    req.flush(patchData);
  });

  it('should perform HEAD request', () => {
    const headData = [
      { data: 'John' },
      { data: 'Doe' }
    ];

    httpService.head('head/mocks').subscribe(data => {
      expect(data).toEqual(headData);
    });

    const req = httpMock.expectOne(`head/mocks`);
    expect(req.request.method).toBe('HEAD');
    req.flush(headData);
  });

  it('should perform DELETE request', () => {
    const putData = [
      { data: 'John' },
      { data: 'Doe' }
    ];

    httpService.delete('get/mocks').subscribe(data => {
      expect(data).toEqual(putData);
    });

    const req = httpMock.expectOne(`get/mocks`);
    expect(req.request.method).toBe('DELETE');
    req.flush(putData);
  });
});
