import { Component, ElementRef, ViewChild } from '@angular/core';
import { LogoService } from './services/logo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './customValidator';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  logo: any;
  apiData:any;
  constructor(private l: LogoService) {
    console.log("Parent Component")
    this.logo = l.addLogo();
    // l.getUsers().subscribe((data)=>{
    //   this.apiData  = data
    // })
    
  }
  title = 'myApp';
  name: string | undefined;
  value = 14;
  show = true;
  color = 'green';
  col = 'blue';
  myBgColor = 'blue';
  mycolor = 'red';
  myDisplay = 'block';
  myname = 'Hello World';
  pipeName = 'all upper case';
  date = new Date(2001, 3, 15);
  currency = '2000';
  number = '22.112233';
  childItem = 'Hi this was sent by parent';
  parentItem = '';
  productDiscount = '';
  hero={
    name:'abcd'
  }
  selectedDiv=''

  fun() {
    //this.name = "Karttekay Grover"; //Method 1
    let root = <HTMLElement>document.getElementById('root');
    root.innerHTML = 'Karttekay Grover';
  }

  printName(ele: HTMLElement, event: any) {
    ele.innerHTML = event.target.value;
  }

  Increment(ele: HTMLElement) {
    this.value++;
    ele.innerHTML = this.value.toString();
  }
  Decrement(ele: HTMLElement) {
    this.value--;
    ele.innerHTML = this.value.toString();
  }
  changeColor = () => {
    this.myBgColor = 'red';
    this.mycolor = 'blue';
  };
  changeDisplay = () => {
    if (this.myDisplay == 'block') {
      this.myDisplay = 'none';
    } else {
      this.myDisplay = 'block';
    }
  };

  changeName=()=>{
    this.myname="Hello Hello"
  }

  userLogin = (item: any) => {
    console.log(item);
  };

  userDetails = [
    {
      name: 'Karttekay',
      branch: 'Ise',
      phone: ['1122', '3344'],
    },
    {
      name: 'ACadD',
      branch: 'Ise',
      phone: ['1122', '3344'],
    },
    {
      name: 'Aa',
      branch: 'Ise',
      phone: ['1122', '3344'],
    },
    {
      name: 'Karttekay',
      branch: 'Ise',
      phone: ['1122', '3344'],
    },
  ];


  addItem(newItem: string) {
    this.parentItem = newItem;
  }

  products = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/1/1.jpg',
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/2/1.jpg',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/3/1.jpg',
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/4/1.jpg',
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      images: 'https://i.dummyjson.com/data/products/6/1.png',
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/7/1.jpg',
    },
  ];
  OriginalProducts = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/1/1.jpg',
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/2/1.jpg',
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/3/1.jpg',
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/4/1.jpg',
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'Apple',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      images: 'https://i.dummyjson.com/data/products/6/1.png',
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      images: 'https://i.dummyjson.com/data/products/7/1.jpg',
    },
  ];

  showDiscount = (val: number, price: number) => {
    let amount = (price - (val * price) / 100).toFixed(2);
    this.productDiscount = amount.toString();
  };

  filterMobiles(item: string) {
    console.log('In parent' + item);
    if (item == 'All') {
      this.products = this.OriginalProducts;
    } else {
      this.products = this.OriginalProducts.filter(
        (product) => product.brand == item
      );
    }
  }

  //For Validator function in Reactive Forms
  
  heroForm:any;
  ngOnInit(): void {
    // this.heroForm = new FormGroup({
    //   name: new FormControl(this.hero.name, [
    //     Validators.required,
    //     Validators.minLength(4),
    //     forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    //   ]),

    // });
    
  }
  
  
  // get name() { return this.heroForm.get('name'); } // getter Function
  

  changeDiv(str:string){
    this.selectedDiv = str;
  }

  fetchUsers = () => {
    console.log(this.apiData);
  }
  addUser = () => {
    this.l.addUser().subscribe((data)=>{
      console.log('Post success')
    })
  }


  //LifeCycle methods demo starts

  // SubmitText:any =""
  // onSubmitInput = (val:any) =>{
  //     this.SubmitText = val

  // }

  SubmitText:any =[]
  onSubmitInput = (val:any) =>{ // So in case of array ngOnChanges not invoked even we keep on pushing values into array upon submit as reference is not changing
      this.SubmitText.push(val);
      console.log(this.SubmitText)
  }

  ngDoCheck(){
    console.log("DO check invoked of Parent")
  }


  // Routing Guard 

  LoginUser(u:any,p:any){
      this.l.login();
  }

  //COntent Child
  inputValue=""
  showInp = (var1:any) => {
    this.inputValue = var1;
  }
 

}
