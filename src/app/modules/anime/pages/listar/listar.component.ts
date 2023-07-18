import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAnime } from '@modules/anime/interface/anime';
import { AnimeService } from '@modules/anime/service/anime.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  cards: IAnime[] = [];
  offset = 0;
  a!: string | null;

  constructor(private animeServici: AnimeService) {}

  ngOnInit(): void {
    //this.cards = [];
    //this.buscarCards();
  }

  //buscar 2 forma
  // onScrooll(){
  //   console.log("scrooll infinito");
  //   this.offset += 50;
  //   //this.buscarCards();
  //   this.buscarCardsForma2();
  // }

  //buscar primera forma
  // buscarCards(){
  //   this.animeServici.obtenerCard().subscribe(resp => {
  //     this.cards = [...this.cards, ...resp];
  //   });
  // }

  onScrooll(paraBuscar: string | null) {
    console.log('scroll infinito');
    this.offset += 50;
    console.log(paraBuscar);
    this.animeServici.buquedas(this.a, this.offset);
  }

  get resultados() {
    return this.animeServici.cards;
  }
  buscarCardsForma2(nombreCard: string | null = null) {
    this.animeServici
      .obtenerCardsAnimerForma2(nombreCard, this.offset)
      .subscribe((resp) => {
        console.log('forma 2');
        this.cards = [...this.cards, ...resp];
      });
  }
}
