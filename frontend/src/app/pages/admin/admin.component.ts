import { Component, OnInit } from '@angular/core';
import { TotalSemillasService } from '../../services/total-semillas.service';
import { AccionesService } from '../../services/acciones.service';
import { Semillas } from '../../models/semillas';
import { Usuario } from '../../models/usuarios';
import { SalidaPdf } from '../../models/salidaPDF';
import { salidaSemillas } from '../../models/salidaSemillas';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[TotalSemillasService,
    AccionesService]
})
export class AdminComponent implements OnInit {

  public titulo:string;
  public respuestaServidor: any;
  public semillas: Semillas[];
  public modeloSemillas:Semillas;
  public usuarios: Usuario;
  public capturarSalida:salidaSemillas;
  public modeloPDF:SalidaPdf;
  public texto:string;
  public alerta:boolean;

  // VARIABLES PARA VISTAS

  public vistaRegistro:boolean;
  public vistaAdmin:boolean;
  public vistaSalida:boolean;
  public vistaTotal:boolean;
  public vistaPdf:boolean;


  constructor(
    private _servicioSemillas:TotalSemillasService,
    private _acciones:AccionesService,
    private router:Router
  ) {
    this.modeloSemillas = new Semillas(0,'',0,'','','','',0,0,0,0,'');
    this.usuarios = new Usuario('','','','','','','','','','','');
    this.capturarSalida = new salidaSemillas('',0,'','',0,'','','','');
    this.modeloPDF = new SalidaPdf('','',0,'',0,0,'','',0,0,0,0,0,0,'','','');
    this.alerta = false;

  }

  ngOnInit(): void {
    this.vistaRegistro = true;
    this.titulo = "Registar entrada de semilla";
    this.getSemillas();
    this.verificarToken();
  }

  


  getSemillas(){

    this._servicioSemillas.totalSemillas().subscribe(
      result =>{
        if(result.datosSemillas){
          this.semillas = result.datosSemillas;
        }
      },
      error =>{
        console.log(error);

      }
    )
  }

  tiempoAlerta(){
    setTimeout(() => {
      this.alerta = false;
    }, 5000);
  }

  guardar(f:NgForm){

    this._acciones.guardarSemilla(this.modeloSemillas).subscribe(
      result =>{
        let respuesta:any = result;

        if(respuesta.status === 200){
          this.alerta = true;
          this.texto ="La semilla se registro correctamente";
          this.tiempoAlerta();
          f.reset();
        }
      },
      error=>{
        console.log(error);

      }
    )

  }

  guardarUsuario(f:NgForm){

    this._acciones.guardarUsuario(this.usuarios).subscribe(
      result =>{
        let respuesta:any = result;
        
        if(respuesta.status === 200){
          this.alerta = true;
          this.texto ="El Usuario se registro correctamente";
          this.tiempoAlerta();
          f.reset();
        }
      },
      error=>{
        console.log(error);

      }
    )
  }


  salidaSemillas(f:NgForm){

    this._acciones.salidaSemilla(this.capturarSalida).subscribe(
      result =>{
        let respuesta:any = result;

        if(respuesta.status === 200){
          this.alerta = true;
          this.texto ="La salida se  registro correctamente";
          this.tiempoAlerta();
          f.reset();
        }
      },
      error=>{
        console.log(error);

      }
    )
    
  }

  editar(id){
    console.log(id);
  }

  crearReporte(f:NgForm){
    this._acciones.generarPDF(this.modeloPDF).subscribe(
      result =>{
        console.log(result);
        let respuesta:any = result;
        if(respuesta.status === 200){
          this.alerta = true;
          this.texto ="El PDF se genero de manera exitosa";
          this.generarPDF();
          this.tiempoAlerta();
          f.reset();
        }
        
      },
      error=>{
        console.log(error);
        
      }
    )
  }

  generarPDF(){
   var tabla = document.getElementById('tabla-pdf');
    
    html2canvas(tabla).then((canvas) =>{
      console.log(canvas);
      
      var imgData = canvas.toDataURL('image/png');
      var imgAltura = canvas.height * 208 / canvas.width;
      var pdf = new jsPDF();

      pdf.addImage(imgData,1,5,208,imgAltura);
      pdf.save("reporte.pdf");

    })



  }

  // VISTAS
  registroSemilla(){
    this.titulo = "Registar entrada de semilla";
    this.vistaRegistro = true;
    this.vistaAdmin = false;
    this.vistaSalida = false;
    this.vistaTotal = false;
    this.vistaPdf = false;
  }

  admin(){
    this.titulo = "Nuevo Admin";
    this.vistaAdmin = true;
    this.vistaRegistro = false;
    this.vistaSalida = false;
    this.vistaTotal = false;
    this.vistaPdf = false;
  }

  

  salida(){
    this.titulo = "Registro de Salida";
    this.vistaAdmin = false;
    this.vistaSalida = true;
    this.vistaTotal = false;
    this.vistaPdf = false;
    this.vistaRegistro = false;

  }

  total(){
    this.titulo = "Total de Semillas";
    this.ngOnInit();
    this.vistaAdmin = false;
    this.vistaSalida = false;
    this.vistaTotal = true;
    this.vistaPdf = false;
    this.vistaRegistro = false;

  }

  pdf(){
    this.titulo = "Generador de PDF";
    this.vistaAdmin = false;
    this.vistaSalida = false;
    this.vistaTotal = false;
    this.vistaPdf = true;
    this.vistaRegistro = false;

  }

  // VERIFICACION DE TOKEN
  verificarToken(){
    let verificacion = localStorage.getItem('TOKEN');
    
    if (verificacion) {
      this.getSemillas();
    } else {
      this.router.navigate(['/login']);
    }
  }

}
