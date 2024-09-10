import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConvertService } from './convert.service';
import { of } from 'rxjs';

describe('ConvertService', () => {
  let service: ConvertService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let testObj = {
    success: true,
    timestamp: 1693809003,
    base: 'EUR',
    date: '2023-09-04',
    rates: {
      AED: 3.963576,
      AFN: 79.681533,
      ALL: 108.474609,
      AMD: 418.881185,
    },
  };
  beforeEach(() => {
    let HttpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        ConvertService,
        {
          provide: HttpClient,
          useValue: HttpClientSpyObj,
        },
      ]
    });
    service = TestBed.inject(ConvertService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected currency rates when getCurrency is called', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(testObj));
    service.getCurrency().subscribe({
      next: (data) => {
        expect(data).toEqual(testObj);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

});
