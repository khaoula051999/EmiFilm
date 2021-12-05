import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/film.service';
import {Subscription}  from "rxjs";
import {Favoris} from "../models/favoris";
import Cookies from "js-cookie";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  films: Array<Favoris> = [];
  filmsSubscription: Subscription = new Subscription();
  err=""
  constructor(public service: FilmService) {
    document.title ="Favoris";
    if(Cookies.get("email")!=undefined){
      this.service.getAllFavoris(Cookies.get("email"));
      this.filmsSubscription = this.service.filmFavorisSubject.subscribe((rsp) => {
        this.films=[];
        for(var i in rsp){
          this.films.push(rsp[i] as Favoris)
        }
      })
      this.service.emitFilmsFavorisSubject()
    }else{
      this.err="Merci de se connecter"
    }

  }

  ngOnInit(): void {
  }

}
