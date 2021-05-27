import { Component, OnInit } from '@angular/core';
import { MovieSerService } from '../movie-ser.service';
import { MoviesObject } from "../MoviesObject";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieSerService: MovieSerService) { }
  title = "movie list";

  movies!: MoviesObject[];


  ngOnInit(): void {
    this.getMovies();
  }
  selectedMovie!: MoviesObject;
  onSelect(movie: MoviesObject): void {
    this.selectedMovie = movie;
  }
  getMovies(): void {
    this.movieSerService.getMovies().subscribe(movies => {
      this.movies = movies;
    });
  }
}
