import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HkComponent } from 'src/app/hk/hk.component';

import { SearchService } from '../api.service/search.service';
import { SelRi } from '../api.service/newin';
import { ChildActivationEnd } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private api:SearchService) {}
  region:string;

  ngOnInit() {
  }  
  selreg(data){
    this.region = data;
  }
}

