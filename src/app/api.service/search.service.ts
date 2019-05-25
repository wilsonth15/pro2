import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { Users , datas, login, ComList } from './newin';
import { Observable, throwError } from 'rxjs';
import { map , catchError } from 'rxjs/operators';



@Injectable()
export class SearchService {
  datas:datas[];
  constructor(private httpClient:HttpClient) { }
  
  PHP_API_SERVER = "/DB";
  insertregion( reg : datas ): Observable<datas[]>{
    return this.httpClient.post(`${this.PHP_API_SERVER}/insertregion.php`,{ data: reg})
    .pipe(map( (res) => {
      this.datas.push (res ['data'] );
    return this.datas;}),
    catchError(this.handleError));
  }
  read(): Observable<datas[]>{
    return this.httpClient.get(`${this.PHP_API_SERVER}/ReadCom.php`)
    .pipe(map((res)=>{this.datas = res['data'];
        return this.datas;}),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  register(user: Users): Observable<Users>{
    return this.httpClient.post<Users>(`${this.PHP_API_SERVER}/register.php`, user);
  }
  login(Login: login): Observable<login>{
    return this.httpClient.post<login>(`${this.PHP_API_SERVER}/login.php`, Login);
  }
  CreCom(list: ComList): Observable<ComList>{
    return this.httpClient.post<ComList>(`${this.PHP_API_SERVER}/CreateCom.php`, list);
  }
  
  
}
