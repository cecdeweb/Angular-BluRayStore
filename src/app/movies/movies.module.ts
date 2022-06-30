import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { DeleteMovieComponent } from './pages/delete-movie/delete-movie.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { ViewMovieComponent } from './pages/view-movie/view-movie.component';


@NgModule({
  declarations: [
    AddMovieComponent,
    DeleteMovieComponent,
    EditMovieComponent,
    ListMoviesComponent,
    ViewMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
