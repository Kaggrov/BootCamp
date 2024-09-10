import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { conversion } from './model/conversion';

let testUrl =
  'http://api.exchangeratesapi.io/v1/latest?access_key=ccf7228bc1568261015d360f6991295c';
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

  it('should call the testurl with get Request', (done) => {
    // only checking url
    httpClient.get<conversion>(testUrl).subscribe();
    done();
  });

  it('should call the testurl with get Request with data in Consideration', (done) => {
    // checking url and data transferred

    //informaton about data transferred
    const testData: conversion = {
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
    httpClient.get<conversion>(testUrl).subscribe((data) => {
      expect(data).toEqual(testData);
    });

    //information about request made
    const request = httpClientController.expectOne(testUrl);
    request.flush(testData);
    expect(request.request.method).toBe('GET');

    done();
  });
});
