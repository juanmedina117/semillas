import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { globales } from '../../globales';
import { Usuario } from '../../models/usuarios';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  public url:string;
  public usuario:Usuario;
  
  public accesoError:string;
  public alerta: boolean;

  constructor(
    private router:Router,
    private _http:LoginService
  ) {
    this.url = globales.url
    this.usuario = new Usuario('','','','','','','','','','','');
  }

  ngOnInit(): void {
  }

  tiempoAlerta(){
    setTimeout(() => {
      this.alerta = false;
    }, 5000);
  }


  entrar(f:NgForm){
    this._http.login( this.usuario).subscribe(
      result=>{
        let resultado:any = result;
        if(resultado.status === 200 && resultado.token){
          localStorage.setItem("TOKEN",resultado.token);
          this.router.navigate(['/admin']);
        }
      },
      error=>{
        let accesoDenegado:any = error;
        this.accesoError = accesoDenegado.error['mensaje'];
        this.alerta= true;
        this.tiempoAlerta();
      }
    )
  }

}
