import { Component, inject } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { type MiniResponse } from '../../models/base-response';

@Component({
  selector: 'app-pokemon-list',
  imports: [NgFor, RouterOutlet, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {


  pokemons: MiniResponse[] = []
  private dataservice = inject(DataService)
  
  constructor() {
    this.dataservice.getPokemonData()
    .then(data => {
      console.log(data)
      this.pokemons = data
    })
  }

  loadMore() {
    console.log('clicked')
    this.dataservice.getNextPage()
    .then(newPokemons => this.pokemons = [...this.pokemons, ...newPokemons])
  }
}
