import { Injectable } from '@angular/core';
import { SearchMovie } from '../models/movie';
import { tempMovieData } from '../mocks/movieData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  #moviesSubject = new BehaviorSubject<SearchMovie[]>([]);
  #moviesCountSubject = new BehaviorSubject<number>(0);

  moviesCount$ = this.#moviesCountSubject;
  movies$ = this.#moviesSubject;

  getMovies(): void {
    const movies = tempMovieData;
    this.#moviesSubject.next(movies);
    this.moviesCount$.next(movies.length);
  }
  // private _movies: SearchMovie[] = [];
  //
  // get moviesFound(): number {
  //   return this._movies.length;
  // }
  //
  // getMovies(): SearchMovie[] {
  //   this._movies = tempMovieData;
  //   return this._movies;
  // }
}
