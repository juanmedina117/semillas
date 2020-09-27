import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globales } from '../globales';
import { Semillas } from '../models/semillas';
import { salidaSemillas } from '../models/salidaSemillas';
import { Usuario } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url:string;


  constructor(
    public _http:HttpClient
  ) {
    this.url = globales.url;
  }

  login(dato:Usuario):Observable<any> {
    let params = JSON.stringify(dato);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(`${this.url}login`,params,{headers:headers})
  }

}
