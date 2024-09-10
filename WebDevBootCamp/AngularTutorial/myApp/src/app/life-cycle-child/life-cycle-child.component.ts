import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent {

  constructor(){
    console.log("LifeCycleChildComponent");
    console.log(this.str)
    console.log("Parent Var"+this.text)
    
  }
  @Input() text=[]
  @ViewChild('temp',{static:true}) demo:ElementRef = {} as ElementRef;
  doCheck = ""

  @Input() message=""
  @ViewChild('temp1',{static:true}) demo1:ElementRef = {} as ElementRef; //access  elements provided
  @ContentChild('temp1') paraContent:ElementRef | undefined;  //access ng content 

  
  str = "I am child Variable";

  ngOnChanges(){
    console.log('ng Onchanges invoked');
    console.log(this.str)
    console.log("Parent Var"+this.text)
    console.log("div details"+this.demo.nativeElement.innerHTML);
  }

  ngOnInit(){
    console.log("This is in Init")
    // console.log("div details"+this.demo.nativeElement.innerHTML);
  }

  ngDoCheck(){
    console.log("DO check invoked")
  }

  ngAfterContentInit(){
    console.log("After Content invoked")
  }
  ngAfterContentChecked(){
    console.log("Content Checked Invoked");
    console.log(" Child div details "+this.demo1.nativeElement.innerHTML);
    console.log(" Parent details "+this.paraContent?.nativeElement.innerHTML);
  }
  onCheck(val:any){
    this.doCheck=val;
    console.log(val)
  }

}
