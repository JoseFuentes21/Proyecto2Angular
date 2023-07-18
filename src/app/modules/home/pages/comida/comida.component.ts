import { Component, OnInit } from '@angular/core';
import { IComida } from '@modules/mascotas/interface/comida.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  comida!:IComida;
  
  constructor(private comidaService:MascotasService) { }

  ngOnInit(): void {
    this.comidaService.comidas.subscribe((resp)=>{
      this.comida = resp;
    });
  }

}
