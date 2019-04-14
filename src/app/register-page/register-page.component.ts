import { Component, OnInit } from '@angular/core';
import { SearchService } from '../api.service/search.service';
import { Users } from '../api.service/newin';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  regdatas:object= { };

  constructor(private regisapi:SearchService ) {}

  ngOnInit() {
  }
  regdata= function(data){
    this.regdatas = {
      "username": data.username,
      "email" : data.email,
      "password":data.password
    }
    console.log(this.regdatas)
    this.regisapi.register(this.regdatas).subscribe((user: Users)=>{
     console.log(" Registration Success! ", user);
    })
  }
}
