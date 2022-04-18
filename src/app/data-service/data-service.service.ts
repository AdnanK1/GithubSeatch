import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private username = 'adnank1';
  
  constructor(private http: HttpClient) { }
  getData():Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/` +this.username);
  }
  getRepo():Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/ `+this.username+ `repos`);
  }
  updateUsername(username:string){
    this.username = username;
  }
}
