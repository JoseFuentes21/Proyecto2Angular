import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotasP: any[] = [];
  datosM: string[] = [];
  datos: any[] = ["Usuario", 30, true, "{'salario':200}"];

  constructor(){}
  ngOnInit(): void {
    this.mostrar();
  }

  //repaso del uso de for para recorrer un arreglo
  mostrar(){
    this.datos.forEach(obj =>{
      console.log("el forEach",obj);
    });
    console.log("*******************");
    for(const key in this.datos){
      console.log("llaves", key);
    }
    for(const iterator of this.datos){
      console.log(iterator);
    }
  }
 
}
