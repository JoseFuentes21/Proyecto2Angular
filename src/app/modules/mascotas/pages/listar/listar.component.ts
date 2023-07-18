import { Component, OnInit } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  mascotas: IMascota[] = [];
  parametroBuscar: string = '';
  i:number=0;
  toastr!: ToastrService;


  //inyertar el servicio
  constructor(private mascotasService:MascotasService) { }

  ngOnInit(): void {
    this.mascotasService.mascotas.subscribe((resp)=>{
      this.mascotas = resp;
    });
  }

  cargar(){
    this.mascotasService.mascotas.subscribe((resp)=>{
      this.mascotas = resp;
    });
  }

  eliminarMacota(mas:IMascota){
    Swal.fire({
      title:'Estas Seguro de Eliminar?',
      text:`Esta Seguro de Borrar a ${mas.raza}`,
      icon:'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result:any)=>{
      if(result.isConfirmed){
        //actualizar el array omitiendo la mascota eliminada
        this.mascotas=this.mascotas.filter((objMascota:IMascota) => objMascota.id!==mas.id);
        // para quitar definitivo del json
        this.mascotasService.eliminarMascota2(mas).subscribe((resp:any) => {
          this.toastr.success('El registro fue eliminado con exito!', 'Eliminado', {positionClass: 'toast-top-right'});
        },(err:any) => {
          Swal.fire({ icon:'error', title:'Errores', text: err.error.msg });
        });
      }
    });
  }
 

  buscar():void {
    this.mascotasService.buscarMascota(this.parametroBuscar).subscribe((resp)=>{
      this.mascotas = resp;
    });
  }

}
