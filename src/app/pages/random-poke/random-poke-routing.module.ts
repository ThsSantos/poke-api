import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomPokePage } from './random-poke.page';

const routes: Routes = [
  {
    path: '',
    component: RandomPokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomPokePageRoutingModule {}
