import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../api.service/search.service';
import { HttpClient } from 'selenium-webdriver/http';
import { data } from '../api.service/newin';
import { HomePageComponent } from 'src/app/home-page/home-page.component';

@Component({
  selector: 'app-hk',
  templateUrl: './hk.component.html',
  styleUrls: ['./hk.component.css']
})
export class HkComponent implements OnInit {
  datas: data[];
  seldata : data = { id:null,place:null, type:null , comment:null};
  constructor(private readapi:SearchService) { }

  ngOnInit() {
    this.readapi.read().subscribe((datas:data[]) => {
      this.datas = datas;
      console.log(this.datas);

    });

  } 
}
