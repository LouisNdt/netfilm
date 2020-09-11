import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
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
  nbResult: any;
  dispTitle: boolean;
  isResult:any;
  dispNbFilm:any;
  constructor(private unService : SearchServiceService, private snackbar: MatSnackBar) {
    this.dispTitle=false;
    this.dispNbFilm=false;
   }

  movies: any;
  userFilm:any;
  getFilmSubscription: Subscription;

  findMovieForm = new FormGroup({
    userInput: new FormControl('')
});


getFilms(){
  this.dispNbFilm=true;
  this.userFilm = this.findMovieForm.controls['userInput'].value;
  this.unService.getFilms(this.userFilm).subscribe((result:any)=>{console.log(result); this.movies = result.Search; this.isResult = result.Response; if (result.Response=="True")this.nbResult = result.Search.length;});
  //this.openSnackBar();
}

/*openSnackBar() {
  if(this.isResult=="False"){
    this.snackbar.open("Pas de film correspondant", "OK", {duration: 3000});
  }
  else{
    this.snackbar.open(this.nbResult + " films", "OK", {duration: 3000});
  }
}*/

}
