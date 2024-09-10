import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  name: string | undefined;
  value=14
  show=true
  color='green'
  col='blue'
  myBgColor='blue'
  mycolor='red'
  myDisplay='block'
  myname="Hello World"
  pipeName="all upper case"
  date = new Date(2001, 3, 15);
  currency="2000"
  number="22.112233"

  fun(){
    //this.name = "Karttekay Grover"; //Method 1
    let root = <HTMLElement>document.getElementById('root')
    root.innerHTML = "Karttekay Grover"
  }

  printName(ele:HTMLElement,event:any){
    ele.innerHTML = event.target.value
  }

  Increment(ele:HTMLElement){
    this.value++;
    ele.innerHTML = this.value.toString();

  }
  Decrement(ele:HTMLElement){
    this.value--;
    ele.innerHTML = this.value.toString();

  }
  changeColor = ()=>{
    this.myBgColor = 'red'
    this.mycolor = 'blue'
  }
  changeDisplay = () => {
    if(this.myDisplay == 'block'){
      this.myDisplay ='none'
    }
    else{
      this.myDisplay='block'
    }
  }

  userLogin=(item:any)=>{
    console.log(item)
  }


  userDetails = [
    {
      name:'Karttekay',
      branch:'Ise',
      phone:['1122','3344']
    },
    {
      name:'ACadD',
      branch:'Ise',
      phone:['1122','3344']
    },
    {
      name:'Aa',
      branch:'Ise',
      phone:['1122','3344']
    },
    {
      name:'Karttekay',
      branch:'Ise',
      phone:['1122','3344']
    }
  ]
}
