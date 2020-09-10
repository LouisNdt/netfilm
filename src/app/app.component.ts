import { HttpClient } from '@angular/common/http';
import { SearchServiceService } from './../../services/search.service';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'NETFILM';
  constructor(private unService : SearchServiceService) { }

  movies: any;
  userFilm:any;
  getFilmSubscription: Subscription;

  findMovieForm = new FormGroup({
    userInput: new FormControl('')
});


getFilms(){
  this.userFilm = this.findMovieForm.controls['userInput'].value;
  this.unService.getFilms(this.userFilm).subscribe((result:any)=>{console.log(result); this.movies = result.Search;});
}

}
