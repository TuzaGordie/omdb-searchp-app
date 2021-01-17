  import { Injectable } from '@angular/core';
  import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
  import { map } from 'rxjs/operators';
  import {Router} from '@angular/router';

  import {MessageService} from './message.service';

  @Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

    private nominatedMovie = [];

    get nominatedMovies(): any {
      return this.nominatedMovie;
    }

  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
      // get nominated movies
    const storedMovies = localStorage.getItem('nominated') || '';
    try {
      this.nominatedMovie = JSON.parse(storedMovies);
    } catch (e) {
      //
    }
  }

  addNominatedMovie(movie: any): boolean {
      const storedMovies = localStorage.getItem('nominated') || '';
      if (storedMovies.includes(movie.Title)) {return false; }

      let stored = [];
      try {
        stored = JSON.parse(storedMovies);
      } catch (e) {
        //
      }
      if (stored.length === 5) {
        this.messageService.error('Nomination limit exceed', null);
        return false;
      }
      stored.push(movie);
      localStorage.setItem('nominated', JSON.stringify(stored));
      this.nominatedMovie = stored;
      this.messageService.success(null, 'Nominated');
      return true;
  }

    deleteNominatedMovie(movie: any): void {
      const target = movie.Title;
      const storedMovies = localStorage.getItem('nominated');
      const storedMoviesArr = JSON.parse(storedMovies);
      for (let i = 0; i < storedMoviesArr.length; i++) {
          if (storedMoviesArr[i].Title === target) {
            storedMoviesArr.splice(i, 1);
            localStorage.setItem('nominated', JSON.stringify(storedMoviesArr));
            this.nominatedMovie = storedMoviesArr;
            this.messageService.success(null, 'Nomination removed');
          }
        }

    }

  // tslint:disable-next-line:typedef
  searchMovieTitle(title: string) {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=dce66809';
    return this.http.get<HttpResponse<any>>(url, {observe: 'response'}).pipe(map((res: any) => res.body));
  }

    redirectTo(uri: string): void{
      this.router.navigateByUrl('n', {skipLocationChange: true}).then(() =>
        this.router.navigate([uri]));
    }


}
