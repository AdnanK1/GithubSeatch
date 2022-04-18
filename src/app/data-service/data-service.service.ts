import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  constructor(private http: HttpClient) { }
  getData():Observable<any> {
    return this.http.get<any>(`https://api.github.com/users?api_key=${environment.apiKey}`);
  }
  getRepo():Observable<any> {
    return this.http.get<any>(`https://api.github.com/users?api_key=${environment.apiKey}/repos`);
  }
}
