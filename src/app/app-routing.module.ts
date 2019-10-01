import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { Post1Component } from './post1/post1.component';
import { Album1Component } from './album1/album1.component';
import { Image1Component } from './image1/image1.component';
import { Task1Component } from './task1/task1.component';



// import { MultipleComponent } from './multiple/multiple.component';
// import {ReverseComponent} from './reverse/reverse.component';
// import{RegistrationComponent} from './registration/registration.component'
// import { RegiComponent} from './regi/regi.component';
// import { NewsComponent } from './news/news.component';
// import { NewslistComponent } from './newslist/newslist.component';


const routes: Routes = [
  //  {path:'',component:ReverseComponent},
  //  {path:'res',component:ReverseComponent},
  //  {path:'',component:MultipleComponent},
  // {path:'mul',component:MultipleComponent},
  // {path:'',component:RegistrationComponent},
  // {path:'regi',component:RegiComponent},
  // {path:'',component:NewsComponent},
  // {path:'newslist',component:NewslistComponent},
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tasks',component:TasksComponent},
  {path:'posts',component:PostComponent},
  {path:'album',component:AlbumsComponent},
  {path:'posts1',component:Post1Component},
{path:'album1',component:Album1Component},
{path:'image',component:Image1Component},
{path:'task1',component:Task1Component}
  
  
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
