import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  panda: FormGroup;

  constructor(private http:HttpClient, private router:Router) { 
    this.panda= new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })
  }
  ngOnInit() {}
  login(value){
    let body={
      email:value.email,
      password:value.password,
    }
    this.http.post("https://reqres.in/api/login",body).subscribe(data=>{
      console.log(data)
      if(value.email = data && value.password ==data){
      this.router.navigate(['dashboard'])
      }
    })
   }
}

