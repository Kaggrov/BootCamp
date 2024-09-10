import { Component } from '@angular/core';
import { ConvertService } from './services/convert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTesting';
  convertedValue=""
  constructor(private x:ConvertService){}

  convert = (fromValue:any,toValue:any,amount:any) => {
      this.x.getCurrency().subscribe((data:any)=>{

          let euroValue = amount/(data['rates'][fromValue])

          let result = euroValue*data['rates'][toValue]

          this.convertedValue ="Exchanged Value :- "+  result.toFixed(3)

      })
  }
}
