import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HkComponent } from 'src/app/hk/hk.component';

import { SearchService } from '../api.service/search.service';
import {  datas } from '../api.service/newin';
import { ChildActivationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  data: datas[];
  error:'';
  success:'';
  seldata : datas = { id:null,place:null, type:null , comment:null};
  
  constructor(private readapi:SearchService , private httpClient:HttpClient) { }

  ngOnInit() {
    this.getdata();
    
  } 
  getdata() {
   this.httpClient.get('http://localhost:4200/DB/ReadCom.php').subscribe
   ((res:any[]) => {
    this.data = res;
  },
  (err) => {
    this.error = err;
  });
  }
  
  region:string;

  
  selreg(d){ 
    this.httpClient.get(`http://localhost:4200/DB/${d}.php`).subscribe
    ((res:any[]) => {
     this.data = res;
   },
   (err) => {
     this.error = err;
   });
    
   
  
  }
}

