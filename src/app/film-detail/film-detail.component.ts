import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmService } from "../film.service";
import { SwapiFilmResult } from "../film.model";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-film-detail",
  templateUrl: "./film-detail.component.html",
  styleUrls: ["./film-detail.component.scss"]
})
export class FilmDetailComponent implements OnInit {
  swapiFilmResult: SwapiFilmResult;
  urlId;
  id;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(paramMap => {
          const selectedFilm = parseInt(paramMap.get("id"));
          return this.filmService.getFilm(selectedFilm);
        })
      )
      .subscribe(swapiFilmResult => {
        this.swapiFilmResult = swapiFilmResult;
      });
  }
}
