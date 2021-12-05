import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavorisComponent } from './favoris/favoris.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'movie/:idmovie', component: DetailFilmComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo:"not-found" },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
