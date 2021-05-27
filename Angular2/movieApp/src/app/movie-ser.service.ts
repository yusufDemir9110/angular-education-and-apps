import { Injectable } from '@angular/core';
import { Movies } from './movies/movie.datasource';
import { MoviesObject } from './MoviesObject';
import{Observable, of} from 'rxjs'
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieSerService {

  private apiMoviesUrl='api/movies';
  
  constructor(private loggingService:LoggingService, private httpClientModule:HttpClientModule ) { }

  getMovies():Observable<MoviesObject[]>{
    this.loggingService.add('MovieService:listing movies');
    return this.httpClientModule.get<Movie[]>(this.apiMoviesUrl);

  }

  getMovie(id:number):Observable<MoviesObject|undefined>{
    this.loggingService.add('MovieService: get detail by id='+id)
    return of(Movies.find(movie=>movie.id===id));
  }

}
