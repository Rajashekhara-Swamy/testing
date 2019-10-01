import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
posts1:any;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(data =>{
      this.posts1=data
      console.log(data)
    })
  }
p1(b){
  localStorage.setItem("userdata",JSON.stringify(b))
  this.router.navigateByUrl('post1')
}
}
