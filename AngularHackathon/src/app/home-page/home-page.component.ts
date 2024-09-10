import { Component } from '@angular/core';
import { AngularApiService } from '../services/angular-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private x:AngularApiService){}
  balance = 0
  accountNo = ""
  currUserType = "Self"

  medicines = [
    {
      name:'Crocin',
      price:100
    },
    {
      name:'Dispirine',
      price:200
    },
    {
      name:'Vicks',
      price:150
    },
    {
      name:'Dolo 650',
      price:200
    }
  ]
  selectedMedicine = "Select Medicine"
  medicineBillAmount = 0;
  selectedPrice = 0;
  quant = ""

  movies=[
    {
      name:'Jawan',
      price:250
    },
    {
      name:'Gadar 2',
      price:200
    },
    {
      name:'Dream Girl 2',
      price:100
    }
  ]

  selectedMovie = "Select Movie"
  movieBillAmount = 0;
  selectedMoviePrice = 0;
  tickets=""
  
  ngOnInit() {
    this.fetchUserData();
  }

  ngOnChange(){
    this.fetchUserData();
  }

  fetchUserData() {
    this.x.getUser().subscribe((userData:any) => {
      const user = userData.find((user: { email: any; }) => user.email === this.x.userInfo.email);

      if (user) {
        this.balance = user.balance;
        this.accountNo = user.accountNo;
      } else {
        console.log('User not found');
      }
    });
  }


  addMoney = (amount:any) => {
    this.x.addMoney(amount).subscribe((data)=>{
      console.log(data)
      alert("Amount Rs. "+amount+" Added Succesfully")
      this.fetchUserData()
      this.addOrder("Add Money",amount);
    })
  }

  debitMoney = (amount:any) => {
    this.x.debitMoney(amount).subscribe((data)=>{
      console.log(data)
      alert("Amount Rs. "+amount+" Debited from Wallet")
      this.fetchUserData()
      this.addOrder("Debit Money",amount);
    })
  }

  addOrder = (name:string,amount:any) => {
    const obj = {
      name:name,
      amount:amount,
      user:this.currUserType
    }
    this.x.addOrder(obj).subscribe((data)=>{
      console.log(data)
    })
  }

  currMed = (name:any,price:any) => {
    this.selectedMedicine = name
    this.selectedPrice = price
  } 
  medicineBill =(quant:any) => {
   console.log(quant)
    this.medicineBillAmount = this.selectedPrice*parseInt(quant);

  }

  currMovie = (name:any,price:any) => {
    this.selectedMovie = name
    this.selectedMoviePrice = price
  } 
  movieBill =(quant:any) => {
   console.log(quant)
    this.movieBillAmount = this.selectedMoviePrice*quant;

  }

  transferMoney = (acc:any,amt:any) => {
    this.x.debitMoney(amt).subscribe((data)=>{
      console.log(data)
      alert("Amount Rs. "+amt+" Debited from Wallet and transferred to "+acc+"Account Number")
      this.fetchUserData()
    })
  }

  userType =( userType:any) =>{
    console.log(userType)
    this.currUserType=userType
  }
}
