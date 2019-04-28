import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryApiMock }  from './mocks/in-memory-api-mock.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { PlayersComponent } from './players/players.component';
import { GameComponent } from './game/game.component';
import { FieldComponent } from './field/field.component';
import { PlayerboardComponent } from './playerboard/playerboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    GameComponent,
    PlayersComponent,
    FieldComponent,
    PlayerboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryApiMock, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
