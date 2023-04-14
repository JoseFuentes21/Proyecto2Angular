import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = [];
  parametroBuscar: string = '';
  //inyertar el servicio
  constructor(private mascotasService:MascotasService) { }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp)=>{
      this.mascotas = resp;
    });
  }

  buscar():void {
    this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp)=>{
      this.mascotas = resp;
    });
  }

}
