import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'help', component: HelpComponent },
  { path: '', redirectTo: '/help', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
