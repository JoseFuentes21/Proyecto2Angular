import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { MascotaComponent } from './pages/mascota/mascota.component';

const routes: Routes = [
  { path:'listar',component:ListarComponent,title:'Listado' },
  { path: ':id',component:MascotaComponent,title:'MascotaID'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
