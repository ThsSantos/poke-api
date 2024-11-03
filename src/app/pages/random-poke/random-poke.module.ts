import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomPokePageRoutingModule } from './random-poke-routing.module';

import { RandomPokePage } from './random-poke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomPokePageRoutingModule
  ],
  declarations: [RandomPokePage]
})
export class RandomPokePageModule {}
