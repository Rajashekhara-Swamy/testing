import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
album1:object;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(data =>{
this.album1=data
console.log(data)
  })
  }
  a1(b){
    localStorage.setItem("userdata",JSON.stringify(b))
    this.router.navigateByUrl('album1')
  }
}
