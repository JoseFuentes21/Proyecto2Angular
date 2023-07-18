import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenEmty'
})
export class ImagenEmtyPipe implements PipeTransform {

  transform(img: any, tipo: 'mascotas'): string {
    if(img?.includes('https')){
      return img;
    }else{
      return `assets/images/no-image.jpg`;
    }
  }

}
