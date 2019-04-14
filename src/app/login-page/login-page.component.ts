import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService} from  '../api.service/search.service';
import {  login } from '../api.service/newin';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  profiles:object={};  
  
  constructor(private insertapi:SearchService) { }
  addData = function(data){
    this.profiles={
      "email": data.email,
      "password":data.password
    }
    console.log(this.profiles)
     this.insertapi.login(data).subscribe((Login: login)=>{
      console.log("Login created, ", Login);
     })
  }
  ngOnInit() {

    }


}
