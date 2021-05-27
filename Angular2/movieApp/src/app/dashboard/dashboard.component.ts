import { Component, OnInit } from '@angular/core';
import { MovieSerService } from '../movie-ser.service';
import { MoviesObject } from '../MoviesObject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private movieSerService:MovieSerService) { }
  movies: MoviesObject[]=[];
  movieLength!:number;

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies():void{
    this.movieSerService.getMovies().subscribe(movies=>
      {this.movies=movies.slice(0,5);
        this.movieLength=movies.length;
    });
  }

}
