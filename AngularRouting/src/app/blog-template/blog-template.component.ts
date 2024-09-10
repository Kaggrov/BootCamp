import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { BlogServiceService } from '../services/blog-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.css']
})
export class BlogTemplateComponent {

  constructor (private x:BlogServiceService,private route:Router){}
  createBlog = new FormGroup({

    title :new FormControl(''),
    description :new FormControl(''),
    image :new FormControl(''),
    toBlog :new FormControl(''),
  })
  submitBlog = () => {
    console.log(this.createBlog.value)
    // this.createBlog.value.authorEmail
    this.x.addBlog(this.createBlog.value).subscribe(()=>{
      console.log("Blog Added Succesfully");
      window.alert("Blog Added Succesfully");
      this.route.navigate(['/home'])
    })
  }
}
