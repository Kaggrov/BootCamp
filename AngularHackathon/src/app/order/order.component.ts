import { Component } from '@angular/core';
import { AngularApiService } from '../services/angular-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  orders:any=[]

  constructor(private x:AngularApiService){}

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders = () => {
      this.x.getOrders().subscribe((data:any)=>{
        this.orders = data;
      })
  }
}
