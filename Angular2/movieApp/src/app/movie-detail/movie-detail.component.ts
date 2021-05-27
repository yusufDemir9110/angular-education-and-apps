import { Component, Input, OnInit } from '@angular/core';
import { MoviesObject } from '../MoviesObject';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() detailMovie!:MoviesObject;

  constructor() { }

  ngOnInit(): void {
  }

}
