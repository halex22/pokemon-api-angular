import { Injectable } from '@angular/core';
import { type Pokemon } from '../models/pokemon';
import { type BaseResponse } from '../models/base-response';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://pokeapi.co/api/v2/'
  private offSet = 0
  private limit = 10

  constructor() { }

  getPokemonData(): Promise<Pokemon[]> {
    
    const endpoint = this.baseUrl + `pokemon?offset=${this.offSet}&limit=${this.limit}`
    return fetch(endpoint)
    .then(res => res.json())
    .then(data  => {
      const formattedData = data as BaseResponse
      return Promise.all(formattedData.results.map((result) => this.getPokemonByName(result.name)))
    })
  }

  getNextPage() {
    this.offSet += this.limit
    this.getPokemonData()
  }

  getPokemonByName(pokemonName: string): Promise<Pokemon> {
    const endpoint = this.baseUrl + 'pokemon/' + pokemonName
    return fetch(endpoint)
    .then(res => res.json())
    .then(data => data)    
  }
}
