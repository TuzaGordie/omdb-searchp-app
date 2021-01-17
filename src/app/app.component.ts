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

  // tslint:disable-next-line:typedef
  searchMovie(title: string) {

    this.connecting.creating = true;

    if (this.title !== '') {
      this.searchService.searchMovieTitle(title).subscribe(
        (data: any) => {
          console.log('response', data);
          this.Results = data.Search;
          this.connecting.creating = false;
        });
    }

  }

  nominate(movie: any): void {
    const result = this.searchService.addNominatedMovie(movie);
  }


}
