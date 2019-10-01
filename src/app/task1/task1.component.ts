import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormGroup,FormControl } from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
r1:FormGroup;
  constructor(private http:HttpClient,private route:Router) {
    this.r1=new FormGroup({
      userId:new FormControl(''),
      Id:new FormControl(''),
      title :new FormControl(''),
    completed:new FormControl('')


    })
   }

  ngOnInit() {
  }
r2(b){
  let data1={
    userId:b.UserId,
    id:b.Id,
    title:b.Title,
    completed:b.Completed

  }
  this.http.post("http://jsonplaceholder.typicode.com/todos",data1).subscribe(data =>{

console.log(data)
this.route.navigateByUrl("tasks")
  })
}
}
