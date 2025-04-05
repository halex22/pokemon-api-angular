import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Input } from '@angular/core';


@Component({
  selector: 'app-pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

  @Input({required:true}) name!: string
  @Input({required:true}) id!: string

}
