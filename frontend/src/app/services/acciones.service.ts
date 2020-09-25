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
export class AccionesService {

  public url:string;


  constructor(
    public _http:HttpClient
  ) {
    this.url = globales.url;
  }

  guardarSemilla(registro:Semillas):Observable<any>{

    let params = JSON.stringify(registro);
    let headers = new HttpHeaders().set('Content-Type','application/json');

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
}
