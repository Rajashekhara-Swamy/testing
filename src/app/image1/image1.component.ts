import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image1',
  templateUrl: './image1.component.html',
  styleUrls: ['./image1.component.css']
})
export class Image1Component implements OnInit {
  img

  constructor() { }

  ngOnInit() {
    this.img=JSON.parse(localStorage.getItem("movie"))
    console.log(this.img)
  }


}
