import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

let testUrl = '/data';
interface Data {
  name: string;
}

describe('Http Client Testing Module', () => {
  //url testing
  let httpClient: HttpClient;
  let httpClientController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpClientController = TestBed.inject(HttpTestingController);
  });

  it('should call the testurl with get Request', (done) => { // only checking url
    httpClient.get<Data>(testUrl).subscribe();
    done();
  });


  it('should call the testurl with get Request with data in Consideration', (done) => { // checking url and data transferred
    
    //informaton about data transferred
    const testData: Data = { name: 'geeta' };
    httpClient.get<Data>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    //information about request made
    const request = httpClientController.expectOne('/data');
    request.flush(testData);
    expect(request.request.method).toBe('GET');

    done();
  });
});
