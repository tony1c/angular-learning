import { Component, inject, OnInit } from '@angular/core';
import { SearchMovie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent implements OnInit {
  #moviesService = inject(MoviesService);
  movies$: SearchMovie[] = [];

  ngOnInit(): void {
    this.#moviesService.movies$.subscribe((movies) => {
      this.movies$ = movies;
    });
    this.#moviesService.getMovies();
    console.log(this.movies$);
  }

  // setSelectedMovie(movie: WatchedMovie): void {
  //   this.selectedMovie = movie;
  // }
}
