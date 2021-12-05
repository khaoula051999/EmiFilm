import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { FilmComponentComponent } from './film-component/film-component.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailFilmComponent } from './detail-film/detail-film.component';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { FavorisComponent } from './favoris/favoris.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({

  declarations: [
    AppComponent,
    FilmViewComponent,
    FilmComponentComponent,
    NavBarComponent,
    DetailFilmComponent,
    HomeComponent,
    FavorisComponent,
    NotFoundComponent,
    SignupComponent,
    SigninComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
