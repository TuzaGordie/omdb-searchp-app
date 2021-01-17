import { Component } from '@angular/core';
import {SearchMovieService} from './services/search-movie.service';
import {Router} from '@angular/router';
import {MessageService} from './services/message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private searchService: SearchMovieService, private router: Router, private messageService: MessageService) {

  }
  title: string;
  result: any;
  Results;
  connecting = {
    creating: false
  };

  searchMovie(title: string): void {

    this.connecting.creating = true;

    this.searchService.searchMovieTitle(title).subscribe(
      (data: any) => {
        console.log('response', data);
        this.Results = data.Search;
      });
  }

  nominate(movie: any): void {
    const result = this.searchService.addNominatedMovie(movie);
  }


}
