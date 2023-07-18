import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnime } from '../interface/anime';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  url ='https://db.ygoprodeck.com/api/v7/cardinfo.php';
  cards:IAnime[] = [];
  constructor(private http:HttpClient) { }
  //imprime cards forma primera
  obtenerCard(offset = 0){
    const params: any = {
      num: 50,
      offset,
    };
    return this.http.get<IAnime[]>(this.url, { params }).pipe(map((resp:any) => resp.data));
  }
  //imprime cards sefunda forma
  obtenerCardsAnimerForma2(nombreCard: string | null, offset=0){
    const params: any = {
      num: 50,
      offset,
    };
    if(nombreCard)
      params.fname = nombreCard;
    return this.http.get<IAnime[]>(this.url, {params}).pipe(map((resp:any) => resp.data));
  }

  buquedas(nombreCard: string | null, offset = 0){
    const params: any = {
      num: 50,
      offset,
    };
    if(nombreCard){
      this.cards = [];
      params.fname = nombreCard;
    }
    this.http.get<IAnime[]>(this.url, {params}).subscribe((resp:any) => {
      console.log(resp.data);
      this.cards = [...this.cards, ...resp.data];
    });
  }

}
