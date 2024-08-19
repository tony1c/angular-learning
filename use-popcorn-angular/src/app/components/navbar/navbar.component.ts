import { Component, inject, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  #moviesService: MoviesService = inject(MoviesService);
  moviesCount$ = 0;

  ngOnInit(): void {
    this.#moviesService.moviesCount$.subscribe((count) => {
      this.moviesCount$ = count;
    });
  }
}
