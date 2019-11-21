import { Component, OnInit, NgModule } from "@angular/core";
import { Film } from "../film.model";
import { FilmService } from "../film.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-film-overview-page",
  templateUrl: "./film-overview-page.component.html",
  styleUrls: ["./film-overview-page.component.scss"]
})
export class FilmOverviewPageComponent implements OnInit {
  films: Film[];

  constructor(private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
    });
  }

  onMoreClick(film: Film) {
    return this.router.navigateByUrl("/movie/detail/" + film.id);
  }
}
