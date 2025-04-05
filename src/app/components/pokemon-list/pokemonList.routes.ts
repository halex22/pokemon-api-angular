import { Routes } from '@angular/router';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

export const listRoutes: Routes = [
  {
    path: 'preview/:name/:id',
    component: PokemonCardComponent
  }
];
