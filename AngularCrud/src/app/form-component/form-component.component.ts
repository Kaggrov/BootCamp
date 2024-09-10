import { Component,Output, EventEmitter, ViewChild } from '@angular/core';
import { ProductsApiService } from '../services/products-api.service';

declare var $: any;
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {


  constructor(private prod :ProductsApiService){}
  formData = {
    name:'',
    description:'',
    price:''
  }


  onSubmit = () => {
    console.log(this.formData)
    this.prod.addProduct(this.formData).subscribe(()=>{
      console.log("Added Product Succesfully");
    })
    this.formData.name=''
    this.formData.description=''
    this.formData.price=''
  }


}
