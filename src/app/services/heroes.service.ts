import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesArr: Array<HeroeModel>;

  constructor() {
    this.heroesArr = [
      { id: 0, name: 'Conan', power: 'Fuerza'},
      { id: 1, name: 'Superman', power: 'Volar'},
      { id: 2, name: 'Batman', power: 'Velocidad'},
      { id: 3, name: 'Spiderman', power: 'Cazar'},
      { id: 4, name: 'Ironman', power: 'Disparar'},
      { id: 5, name: 'Hulk', power: 'Destruir'},
      { id: 6, name: 'Thor', power: 'Rayo'},
      { id: 7, name: 'Loki', power: 'Desaparecer'},
      { id: 8, name: 'Capitan America', power: 'Fuerza'}
    ];
  }

  getHeroes() {
    return this.heroesArr;
  }
}