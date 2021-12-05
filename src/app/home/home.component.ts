import { Component, OnInit } from '@angular/core';
import { Film } from "../models/film";
import { FilmService } from "../services/film.service";
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchedText: String = "";
  films: Array<Film> = [];
  totalPage;
  currentPage;

  filmsSubscription: Subscription = new Subscription();

  constructor(public service: FilmService, private route: ActivatedRoute) {
    document.title = "Welcome to FilmStream"
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(rsp=>{
      if (rsp["name"] != undefined) {
        this.searchedText = rsp["name"]
        this.service.getFilms(rsp["name"],1)
      } else this.service.getAllFilms(1)
      this.filmsSubscription = this.service.filmSubject.subscribe((rsp) => {
        this.currentPage = rsp["page"]
        this.totalPage = rsp["total_pages"];
        this.films = rsp["results"];
      })
      this.service.emitFilmsSubject()
    });
  }

  setPage(page) {
    if (this.searchedText.length == 0) {
      this.service.getAllFilms(page)
    } else {
      this.service.getFilms(this.searchedText,page)
    }
    this.filmsSubscription = this.service.filmSubject.subscribe(rsp => {
      this.currentPage = rsp["page"]
      this.totalPage = rsp["total_pages"];
      this.films = rsp["results"];
    })
    this.service.emitFilmsSubject()
  }

}
