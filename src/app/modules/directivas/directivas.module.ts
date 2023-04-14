import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';
import { NgIfComponent } from './pages/ng-if/ng-if.component';
import { NgSwitchComponent } from './pages/ng-switch/ng-switch.component';
import { BindingComponent } from './pages/binding/binding.component';
import { NgForComponent } from './pages/ng-for/ng-for.component';
import { NgStyleComponent } from './pages/ng-style/ng-style.component';
import { NgClassComponent } from './pages/ng-class/ng-class.component';
import { ListarComponent } from './pages/listar/listar.component';
import { NgModelComponent } from './pages/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgIfComponent,
    NgSwitchComponent,
    BindingComponent,
    NgForComponent,
    NgStyleComponent,
    NgClassComponent,
    ListarComponent,
    NgModelComponent
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule,
    FormsModule
  ]
})
export class DirectivasModule { }
