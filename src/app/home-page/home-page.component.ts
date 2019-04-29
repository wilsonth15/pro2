import { Component, OnInit } from '@angular/core';

import { SearchService } from '../api.service/search.service';
import { SelRi } from '../api.service/newin';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor(private api:SearchService) {}

  ngOnInit() {

  }
  public selreg( region:object){
    
   
}
}

