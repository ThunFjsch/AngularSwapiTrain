import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input() film: Film[];
}
