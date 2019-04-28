import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Player } from '../models/player';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersUrl = 'api/players';  // URL to web api

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl).pipe(
      catchError(this.handleError<Player[]>('getPlayers', []))
    );
  }

  updatePlayer (player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, httpOptions).pipe(
      catchError(this.handleError<any>('updatePlayer'))
    );
  }

  addPlayer (player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, httpOptions).pipe(
      catchError(this.handleError<Player>('addPlayer'))
    );
  }

}
