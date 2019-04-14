import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HkComponent } from './hk/hk.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent} from './home-page/home-page.component';
import { CommentPageComponent } from './comment-page/comment-page.component';
const routes: Routes = [
  {path: 'hk', component:HkComponent} ,
  {path: '#', component:AppComponent} ,
  {path: 'login', component:LoginPageComponent} ,
  {path: '', component:HomePageComponent},
  {path: 'reg', component:RegisterPageComponent},
  {path: 'comment', component:CommentPageComponent} 
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
