import { Injectable } from '@angular/core';
import { User } from '../user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private http: HttpClient) { }


  signup(user: User): Observable<any>  {
    //Edit url to your backend location
    const url = "http://localhost:8080/api/user-gmdb-service/createuser"

    let ourheaders = new HttpHeaders()
    ourheaders.append('Content-Type', 'application/json');

    return this.http.post(url, user, {headers: ourheaders})


  }
}
