import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globales } from '../globales';
import { Semillas } from '../models/semillas';


@Injectable({
  providedIn: 'root'
})
export class TotalSemillasService {

  public url:string;

  constructor(
    public _http:HttpClient
  ) {
    this.url = globales.url;
   }

   totalSemillas():Observable<any>{

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.get(`${this.url}verSemillas`,{headers:headers});

   }

   buscarSemilla(dato:string):Observable<any>{
    let params = JSON.stringify(dato);
        let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(`${this.url}buscarSemilla/${dato}`,{headers:headers});
   }

}
