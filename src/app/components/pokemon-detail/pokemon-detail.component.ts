import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { type Pokemon } from '../../models/pokemon';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-detail',
  imports: [CommonModule],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent {
  // @Input({required:true}) pokemonName!: string
  pokemon?: Pokemon 

  constructor(private service: DataService, private route: ActivatedRoute) {
    const name = this.route.snapshot.params['pokemonName']
    this.service.getPokemonByName(name)
    .then(data => {
      console.log(data)
      this.pokemon = data 
    })
    
  }
}
