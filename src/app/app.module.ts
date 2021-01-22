import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchMovieService} from './services/search-movie.service';
import { NominationsComponent } from './nominations/nominations.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NominationsPageComponent } from './nominations-page/nominations-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NominationsComponent,
    NominationsPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ToastrModule.forRoot({
        maxOpened: 1,
        preventDuplicates: true,
        tapToDismiss: true
      }),
      BrowserAnimationsModule,
      FontAwesomeModule
    ],
  providers: [SearchMovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
