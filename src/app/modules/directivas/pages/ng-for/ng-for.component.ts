import { Component, OnInit } from '@angular/core';
import { IEmpleado } from '../interface/empleado.interfaces';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
  msg:string = 'Uso del ngFor';
  listaEmpleado:IEmpleado[] =[
    {nombre:'Orlando Antonio Mejia', telefono:'7342-1231', puesto:'Gerente', genero:'M', edad:25},
    {nombre:'Javier Gusman Mejia', telefono:'7673-4567', puesto:'Contador', genero:'M', edad:35},
    {nombre:'Felipe Armando Carrazco', telefono:'2344-1231', puesto:'Ordenanza', genero:'M', edad:22},
    {nombre:'Billie Menjivar Baron', telefono:'7123-3465', puesto:'Sub Gerente', genero:'F', edad:28},
    {nombre:'Daniela Zapata', telefono:'7524-1200', puesto:'Administrador', genero:'F', edad:29}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
