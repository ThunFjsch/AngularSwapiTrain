import { Component, OnInit } from "@angular/core";
import { FilmService } from "./film.service";
import { Film } from "./film.model";

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
}
