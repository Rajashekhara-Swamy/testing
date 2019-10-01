import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MultipleComponent } from './multiple/multiple.component';
// import { ReverseComponent } from './reverse/reverse.component';
// import { DataComponent } from './data/data.component';
// import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl} from '@angular/forms';
// import { RegiComponent } from './regi/regi.component';
// import { NewsComponent } from './news/news.component';
// import { NewslistComponent } from './newslist/newslist.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { Task1Component } from './task1/task1.component';
import { Post1Component } from './post1/post1.component';
import { Album1Component } from './album1/album1.component';
import { Image1Component } from './image1/image1.component';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // MultipleComponent,
    // ReverseComponent,
    // DataComponent,
    // RegistrationComponent,
    // RegiComponent,
    // NewsComponent,
    // NewslistComponent,
    LoginComponent,
    DashboardComponent,
    TasksComponent,
    PostComponent,
    AlbumsComponent,
    Task1Component,
    Post1Component,
    Album1Component,
    Image1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
