import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  constructor(private httpClient: HttpClient) { }

  getFilms(film: String) {
    let url = "http://omdbapi.com/?i=tt3896198&apikey=217bcfa8&s=";
    return this.httpClient.get(url + film);
  }
}
