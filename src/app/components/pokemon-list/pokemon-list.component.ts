import { Component, inject } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { DataService } from '../../services/data.service';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [NgFor, RouterOutlet, RouterModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {

  pokemons: Pokemon[] = []
  private dataservice = inject(DataService)
  
  constructor() {
    this.dataservice.getPokemonData()
    .then(data => {
      console.log(data)
      this.pokemons = data
    })
  }
}
