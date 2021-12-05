import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})

export class FilmViewComponent implements OnInit {

  @Input() films;
  @Input() totalPage;
  @Input() currentPage;

  @Output() setPage = new EventEmitter<Number>();

  constructor() {

  }

  previous(){
    this.setPage.emit(this.currentPage-1)
  }
  next(){
    this.setPage.emit(this.currentPage+1)
  }
  ngOnInit(): void {
  }
}
