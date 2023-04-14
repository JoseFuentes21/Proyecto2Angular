import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent {
  //para cambiar la propiedad disabled del input del button
  habilitar: boolean = false;
  //cambiar la propiedad clase en el button
  clase:string='btn btn-danger';
  //para cambiar la propiedad placeholder
  txtPlaceHolder: string = 'Su Nombre';
  //para cambiar la propiedad del tipo input
  txtType:string ='radio';
  //cambiar la propiedad checket
  isCheked:boolean=true;
  cambiarPropiedad(){
    this.habilitar =! this.habilitar;
    this.txtPlaceHolder='Deshabilitado';
    this.txtType = 'checkbox';
    this.isCheked =! this.isCheked;
    this.clase = 'btn btn-primary';
  }
}
