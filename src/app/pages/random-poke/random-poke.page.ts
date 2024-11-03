import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
@Component({
  selector: 'app-random-poke',
  templateUrl: './random-poke.page.html',
  styleUrls: ['./random-poke.page.scss'],
})
export class RandomPokePage implements OnInit {

  id_pokemon: any = "";
  id: any = "";
  nome: any = "";
  foto: any = "";
  peso: any = "";
  altura: any = "";
  tipos: any[] = [];
  movimentos: any[] = [];
  status :boolean = false;

  constructor(private pokeService: PokeapiService) { }

  gerarPokemon(){
    this.id_pokemon = Math.floor(Math.random()* 1025 + 1);
    this.pokeService.buscarPokemon(this.id_pokemon).then(response=>{
      this.interface(response);
    }).catch(error=>{
      console.log(error);
    })
  }

  interface(pokemon:any){
    this.status = true;
    this.id = pokemon.id;
    this.nome = pokemon.name;
    this.foto = pokemon.sprites.front_default;
    this.peso = pokemon.weight;
    this.altura = pokemon.height;
    this.tipos = pokemon.types;
    this.movimentos = pokemon.moves;
  }

  ngOnInit() {
  }

}
