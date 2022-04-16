import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  get Data():Observable<any> {
    const url = "https://api.github.com/users"
    return this.http.get<any>(`url`);
  }
}
