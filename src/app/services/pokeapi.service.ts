import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  buscarPokemon(pokemon : string){
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    var header = {
      headers: new HttpHeaders().set('Content-Type',`application/json`)
    }

    return this.http.get(url, header).toPromise();

  }

}
