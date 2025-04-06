import { Injectable } from '@angular/core';
import { type Pokemon } from '../models/pokemon';
import { type BaseResponse } from '../models/base-response';
import { type MiniResponse } from '../models/base-response';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://pokeapi.co/api/v2/'
  private offSet = 0
  private limit = 10
  constructor() { }

  getPokemonData(): Promise<MiniResponse[]> {
    const endpoint = this.baseUrl + `pokemon?offset=${this.offSet}&limit=${this.limit}`
    return fetch(endpoint)
    .then(res => res.json())
    .then(data  => {
      const formattedData = data as BaseResponse
      return Promise.all(formattedData.results
        .map(
          (result) => this.getPokemonByName(result.name)
          .then(data => {
            const mini: MiniResponse = {
              id: data.id,
              name: data.name,
            }
            return mini
          })
        ))
    })
  }

  getNextPage() {
    this.offSet += this.limit
    return this.getPokemonData()
  }

  getPokemonByName(pokemonName: string): Promise<Pokemon> {
    const endpoint = this.baseUrl + 'pokemon/' + pokemonName
    return fetch(endpoint)
    .then(res => res.json())
    .then(data => data)    
  }
}
