import { Component, OnInit } from "@angular/core";
import { Film } from "./film.model";
import { FilmService } from "./film.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
    });
  }

  onMoreClick(film: Film) {
    console.log(film);
  }
}
