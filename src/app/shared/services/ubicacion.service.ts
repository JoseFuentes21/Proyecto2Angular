import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPais } from '@shared/interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }

  public getDepa(): Observable<IPais[]>{
    return this.http.get<IPais[]>("assets/ubicacionPais.json");
  }
}
