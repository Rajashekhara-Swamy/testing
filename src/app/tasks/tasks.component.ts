import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
task:any;
data:any;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/todos").subscribe(data=>{
      this.task=data
      console.log(data)
    }
    )
    
  }
  add()
  {
    this.router.navigateByUrl("task1")
  }
}
