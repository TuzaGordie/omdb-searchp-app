import {Component, OnInit} from '@angular/core';
import {SearchMovieService} from '../services/search-movie.service';
import {Router} from '@angular/router';
import {MessageService} from '../services/message.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get movies(): any {
    return this.searchService.nominatedMovies;
  }

  constructor(private searchService: SearchMovieService, private router: Router, private messageService: MessageService) {

  }
  title: string;
  result: any;
  Results;
  connection = {
    creating: false
  };

  // tslint:disable-next-line:typedef
  searchMovie(title: string) {

    this.connection.creating = true;

    if (this.title !== '') {
      this.searchService.searchMovieTitle(title).subscribe(
        (data: any) => {
          this.Results = data.Search;
          this.connection.creating = false;
        });
    }

  }

  nominate(movie: any): void {
    const result = this.searchService.addNominatedMovie(movie);
  }

  ngOnInit(): void {
  }

}
