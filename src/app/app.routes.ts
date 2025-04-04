import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { listRoutes } from './components/pokemon-list/pokemonList.routes';

export const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
    children: listRoutes
  }
];
