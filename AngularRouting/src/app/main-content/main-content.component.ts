import { Component } from '@angular/core';
import { BlogServiceService } from '../services/blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
})
export class MainContentComponent {
  blogs: any;
  value = JSON.parse(localStorage.getItem('userDetails')|| '{}')
   
  userEmail = this.value.email
  constructor(private x: BlogServiceService,private route:Router) {
    console.log("IN Constr")
    this.getAllBlogs()
  }

  getAllBlogs = () => {
    this.x.getBlogs().subscribe((data) => {
      console.log(data)
      this.blogs = data;
    });
  }

  createBlog = () => {
      this.route.navigate(['/createBlog'])
  }

  onDelete = (id:any) => {
    this.x.deleteBlog(id).subscribe(()=>{
      window.alert("Blog deleted Succesfully")
    })
    
    this.getAllBlogs()
  }
  open = (url:any) => {
    window.open(url,'_blank')?.focus();
  }
}
