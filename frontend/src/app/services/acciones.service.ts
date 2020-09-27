import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { globales } from '../globales';
import { Semillas } from '../models/semillas';
import { salidaSemillas } from '../models/salidaSemillas';
import { Usuario } from '../models/usuarios';
import { SalidaPdf } from '../models/salidaPDF';


@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  public url:string;


  constructor(
    public _http:HttpClient
  ) {
    this.url = globales.url;
  }

  guardarSemilla(registro:Semillas):Observable<any>{

    let params = JSON.stringify(registro);
    // 'Content-Type','application/json'
    let token =localStorage.getItem('TOKEN');
    let headers = new HttpHeaders().append('Content-Type','application/json');
    return this._http.post(`${this.url}crearSemilla`,params,{headers:headers})
  }

  guardarUsuario(usuarios:Usuario):Observable<any>{
    let params = JSON.stringify(usuarios);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(`${this.url}crearUsuario`,params,{headers:headers})

  }

  salidaSemilla(salida:salidaSemillas){


    let params = JSON.stringify(salida);

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(`${this.url}registrarSalida`,params,{headers:headers});
  }

  editarSemilla(semilla):Observable<any>{

    let params = JSON.stringify(semilla)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(`${this.url}editarSemilla/${semilla._id}`,params,{headers:headers});
  }

  generarPDF(pdf:SalidaPdf){
    let params = JSON.stringify(pdf)
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(`${this.url}generarPDF`,params,{headers:headers});
  }
}
