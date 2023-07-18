import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PageNotfoundComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
