import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from "../services/film.service";
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import Cookies from "js-cookie";

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']
})
export class FilmComponentComponent implements OnInit {

  @Input() filmData;
  filmService: FilmService;
  isFavoris=false;
  constructor(private service: FilmService) {
    this.filmService = service;
  }
  ngOnInit(): void {
    if(Cookies.get("email")!=undefined && this.filmData!=undefined){
      this.service.isInFavoris(Cookies.get("email"),this.filmData.id)
      .then(rsp=>{
        if(rsp.length!=0) this.isFavoris = true
      })
      .catch(err=>{console.log("=======================")})
    }
  }
}
