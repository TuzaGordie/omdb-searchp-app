import {Component, OnInit} from '@angular/core';
import {SearchMovieService} from '../services/search-movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private searchService: SearchMovieService, private router: Router) {

  }

  ngOnInit(): void {
  }

}
