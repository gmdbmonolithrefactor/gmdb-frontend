import { Injectable } from '@angular/core';
import { data } from './data';
import { Movies } from './movies';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  constructor(private http: HttpClient) { }

  getMovieByMyId(id: number){

    //Edit url to your backend location
   const url = 'http://localhost:8080/api/movies-gmdb-service/movies';
   // return this.http.get<Movies[]>(url)

  }
  getMovieByID(id: number): Movies {
    let movie;
   for(let i=0; i<data.length;i++){
     if(data[i].movie_id == id){
        movie = data[i];
        console.log(data[i].movie_id);
     }
   }
    return movie;
  }

}
