import { Component, OnInit } from '@angular/core';
import { TotalSemillasService } from '../../services/total-semillas.service';
import { AccionesService } from '../../services/acciones.service';
import { Semillas } from '../../models/semillas';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  providers:[TotalSemillasService,
    AccionesService]
})
export class EditarComponent implements OnInit {

  public modeloSemillas:Semillas;
  public alerta: boolean;

  constructor(
    private _servicioSemillas:TotalSemillasService,
    private _acciones:AccionesService,
    private _router:Router,
    private _route:ActivatedRoute

  ) {
    this.modeloSemillas = new Semillas(0,'',0,'','','','',0,0,0,0,'');
    this.alerta = false;
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
        let id = params.id;
        this.verSemilla(id);
    })
  }

  verSemilla(id){
    this._servicioSemillas.buscarSemilla(id).subscribe(
      result=>{
        this.modeloSemillas = result.dato;
      },
      error => {

      }
    )
  }

  modificarSemilla(f:NgForm){
   this._acciones.editarSemilla(this.modeloSemillas).subscribe(
      result=>{
        let respuesta:any = result;
        respuesta
        if(respuesta.status === 200){
          this.alerta = true;
          this.tiempoAlerta();
        }

      },
      error=>{

        console.log(error);

      }
   )
  }

  tiempoAlerta(){
    setTimeout(() => {
      this.alerta = false;
    }, 5000);
  }

}
