import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  tema: string = 'Uso de ngClass';

  //variabl que cambiara la clase de la alerta 
  alerta: string = 'alert-danger';

  //objeto a usar en la ngclass
  propiedad = {
    danger: false
  };

  //para usar ngClass usando condicion
  message:number = 5;
}
