import { Component, Input } from '@angular/core';
import { ProductsApiService } from '../services/products-api.service';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  currentProducts: any = [];
  constructor(private prod: ProductsApiService) {}
  @Input()
  productChosen: any = {};
  searchId: any;
  searchProduct: any = {
    id: null,
    name: '',
    description: '',
    price: '',
  };

  getProducts = () => {
    this.prod.getProducts().subscribe((data) => {
      this.currentProducts = data;
    });
  };

  clearProducts = () => {
    this.currentProducts = [];
  };

  deleteProduct = (id: any) => {
    console.log(id);
    this.prod.deleteProduct(id).subscribe((data) => {
      window.alert('Id :' + id + 'Succesfully deleted');
    });
  };

  onSubmit = () => {
    console.log(this.searchId);
    this.prod
      .searchProduct(this.searchId)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 0) {
            console.error('An error occurred:', error.error);
          } else {
            window.alert('No ID present');
            console.error(
              `Backend returned code ${error.status}, body was: `,
              error.error
            );
          }
          return throwError(
            () => new Error('Something bad happened; please try again later.')
          );
        })
      )
      .subscribe((data) => {
        console.log('data' + data);
        this.searchProduct = data;
      });
  };
}
