import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { EditMovieComponent } from './pages/edit-movie/edit-movie.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { ViewMovieComponent } from './pages/view-movie/view-movie.component';

const routes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: 'add', component: AddMovieComponent },
  { path: 'edit', component: EditMovieComponent },
  { path: 'view', component: ViewMovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
