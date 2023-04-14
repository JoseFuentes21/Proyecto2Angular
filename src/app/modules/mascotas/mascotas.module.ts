import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MascotasService } from './services/mascotas.service';
import { MascotaComponent } from './pages/mascota/mascota.component';


@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    MascotaComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[
    MascotasService
  ]
})
export class MascotasModule { }
