import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-barra-usuario',
  templateUrl: './barra-usuario.component.html',
  styleUrls: ['./barra-usuario.component.css']
})
export class BarraUsuarioComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    localStorage.removeItem("TOKEN");
    this.router.navigate(['/login']);
  }
}
