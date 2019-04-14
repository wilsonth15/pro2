import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchService } from '../api.service/search.service';
import { ComList } from '../api.service/newin';
import { FormBuilder } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {
    constructor( private Comapi:SearchService, private fb:FormBuilder) {

   }  
    regions = [
      { id:1,  name : "Kwai Tsing"},
      { id:2,  name : "Wong Tai Sin"},
      { id:3,  name : "Tsuen Wan"},
      { id:4,  name : "Sham Shu Po"},
      { id:5,  name : "Kowloon City"},
      { id:6,  name : "Tuen Mun"},
      { id:7,  name : "Yau Tsim Mong"},
      { id:8,  name : "Kwun Ton"},
      { id:9,  name : "Islands"},
      { id:10, name : "North"},
      { id:11, name : "Yuen Long"},
      { id:12, name : "Tai Po"},
      { id:13, name : "Sha Tin"},
      { id:14, name : "Eastern"},
      { id:15, name : "Central and Western"},
      { id:16, name : "WanChai" },
      { id:17, name : "Sai Kung" },
      { id:18, name : "Southern" }
      ];
      types = [
        { id:1, type:"Shopping mall"},
        { id:2, type:"Restaurant"},
        { id:3, type:"Bars"},
        { id:4, type:"Special events"},
        { id:5, type:"Other suggestion"}
              ];

        comdatas:object={};

        
  
  ngOnInit() {    

  }
  Commdata = function(data){
    this.comdatas = {
      "region":  data.region.name,
      "type": data.type.type,
      "place": data.place,
      "comment": data.comment
    }
    console.log(this.comdatas)
    this.Comapi.CreCom(this.comdatas).subscribe(( list:ComList )=>{
     console.log(" Comment Success! ", list);
    })
  }


}
