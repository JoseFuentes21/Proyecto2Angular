import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {
  size:number = 14;
  bandera:boolean = true;
  colorEstado:string = '#f00';
  message=1;

  get color(){
    return '#00f';
  }
  
}
