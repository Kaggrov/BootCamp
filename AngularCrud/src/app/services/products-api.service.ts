import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  endPoint = "http://localhost:3000/products"

  constructor(private end:HttpClient) { }

  getProducts = () => {
    return this.end.get(this.endPoint);
  }

  addProduct = (product:any) => {
      return this.end.post(this.endPoint,product);
  }

  deleteProduct = (id:any)=>{
    console.log(id ,  typeof id)
    return this.end.delete(this.endPoint+'/'+id);
  }

  searchProduct = (id:any) => {
    return this.end.get(this.endPoint+'/'+id);
  }


}
