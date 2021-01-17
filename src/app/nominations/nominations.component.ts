import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchMovieService} from '../services/search-movie.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {MessageService} from '../services/message.service';


@Component({
  selector: 'app-nominations',
  templateUrl: './nominations.component.html',
  styleUrls: ['./nominations.component.scss']
})
export class NominationsComponent implements OnInit {
  faTrash = faTrash;

  get movies(): any {
    return this.searchService.nominatedMovies;
  }


  constructor(private router: Router, private searchService: SearchMovieService, private messageService: MessageService) {
  }

  delete(movie: any): void {
    console.log('hey ninja 1');
    const result = this.searchService.deleteNominatedMovie(movie);
  }

  ngOnInit(): void {
  }

}
