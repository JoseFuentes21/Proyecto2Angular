import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMascota } from '@modules/mascotas/interface/mascotas.interface';
import { MascotasService } from '@modules/mascotas/services/mascotas.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.scss']
})
export class MascotaComponent implements OnInit {
  mascota!: IMascota;

  constructor(private mascotasService:MascotasService,
              private activatedRoute:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    //como devuelve un observable
    //witchMap, operador de transromacion
    this.activatedRoute.params.pipe(switchMap(({id}) => this.mascotasService.detalleMascota(id)))
                              .subscribe((resp:IMascota) =>{
                                this.mascota = resp;
                              });
  }
  regresar(){
    //para ir a la ruta indicada
    this.router.navigate(['mascotas/listar']);
  }

}
