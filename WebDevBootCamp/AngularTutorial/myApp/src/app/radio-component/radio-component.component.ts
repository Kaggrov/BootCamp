import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-radio-component',
  templateUrl: './radio-component.component.html',
  styleUrls: ['./radio-component.component.css']
})
export class RadioComponentComponent {
  @Input() discount:string="";
  @Output() newItemEvent  = new EventEmitter<string>();

  onChangeradio = (val: any)=>{
    console.log(val.target.value)
    this.newItemEvent.emit(val.target.value);
  }
  
}
