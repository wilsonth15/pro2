import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../api.service/search.service';
import { HttpClient } from 'selenium-webdriver/http';
import { datas } from '../api.service/newin';
import { HomePageComponent } from 'src/app/home-page/home-page.component';

@Component({
  selector: 'app-hk',
  templateUrl: './hk.component.html',
  styleUrls: ['./hk.component.css']
})
export class HkComponent implements OnInit {
  datas: datas[];
  error:'';
  success:'';
  seldata : datas = { id:null,place:null, type:null , comment:null};
  constructor(private readapi:SearchService) { }

  ngOnInit() {
    
    this.getdata();
    
  } 
  getdata(): void {
    this.readapi.read().subscribe(
      (res: datas[]) => {
        this.datas = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
