import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  //recibe el objeto que imprime en la card
  @Input() obj!:IMascota;

  //eliminar mascota paso del hijo al pardre
  @Output() eliminar = new EventEmitter<IMascota>();

  //para borrar desde la card misma
  mascota!: IMascota;
  
  constructor(private mascotasService:MascotasService) {
    console.log("En el componente card");
   }


  ngOnInit(): void {
  }

  mostrarAlerta(id:string): void{
    const alert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });
    alert.fire({
      title: 'Estas Seguro?',
      text: `No podras revertir esto!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Borrar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.mascotasService.eliminarMascota(id).subscribe();
        alert.fire('Elimado!', 'El Registro ha sido Elimnado', 'success');
      }else if(result.dismiss === Swal.DismissReason.cancel){
        alert.fire('Cancelado', 'Registro sigue Almacenado', 'error');
      }
    })
  }


  eliminarPet(obj: IMascota){
    this.eliminar.emit(obj);
  }
  
}
