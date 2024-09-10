import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { conversion } from '../model/conversion';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  endPoint = "http://api.exchangeratesapi.io/v1/latest?access_key=ccf7228bc1568261015d360f6991295c"
  constructor(private http:HttpClient) { }


  getCurrency = () => {
    return this.http.get<conversion>(this.endPoint);
  }
}
