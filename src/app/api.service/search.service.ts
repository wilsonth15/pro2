import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from "@angular/common/http";
import { Users , data, login, ComList} from './newin';
import { Observable } from 'rxjs';



@Injectable()
export class SearchService {
  constructor(private httpClient:HttpClient) { }

  PHP_API_SERVER = "/DB";

  read(): Observable<data[]>{
    return this.httpClient.get<data[]>(`${this.PHP_API_SERVER}/ReadCom.php`);
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
