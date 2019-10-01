import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post1',
  templateUrl: './post1.component.html',
  styleUrls: ['./post1.component.css']
})
export class Post1Component implements OnInit {
  postdata: any;
  da: any;
  comp=[];
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/comments").subscribe(data =>{
this.postdata=data
  })
  this.da=JSON.parse(localStorage.getItem("userdata"))
  setTimeout(()=>{
    this.p11();
  },2000)
}
p11()
{
  for(var i=0;i<this.postdata.length;i++)
  {
    if(this.da.userId==this.postdata[i].postId)
    {
      this.comp.push(this.postdata[i])
    }
  
}
  
  console.log(this.comp)
  }

}
