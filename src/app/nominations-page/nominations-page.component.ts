import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchMovieService} from '../services/search-movie.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-nominations-page',
  templateUrl: './nominations-page.component.html',
  styleUrls: ['./nominations-page.component.scss']
})
export class NominationsPageComponent implements OnInit {
  faTrash = faTrash;

  get movies(): any {
    return this.searchService.nominatedMovies;
  }

  constructor(private router: Router, private searchService: SearchMovieService, private messageService: MessageService) { }

  delete(movie: any): void {
    const result = this.searchService.deleteNominatedMovie(movie);
  }

  ngOnInit(): void {
  }

}
