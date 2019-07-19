import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';
import { data } from './data';
import {Router} from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
  // selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  Movies: any[];
  constructor(private router: Router, private moviesservice: MoviesService) {

  }


  public ngOnInit() {
    this.moviesservice.getAllMovies().subscribe(resp => console.log(resp))
    this.Movies = data;
  }



}
