import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { listRoutes } from './components/pokemon-list/pokemonList.routes';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    title: 'Pokedex',
    children: listRoutes
  },
  {
    path: 'pokemon/:pokemonName',
    component: PokemonDetailComponent,
    title: 'Pokemon Details'
  }
];
