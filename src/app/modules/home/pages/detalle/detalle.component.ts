import { Component } from '@angular/core';
import { MODULO1, MODULO2, MODULO3 } from 'src/app/constants/constants';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  modulo1:string = MODULO1;
  modulo2:string = MODULO2;
  modulo3:string = MODULO3;
}
