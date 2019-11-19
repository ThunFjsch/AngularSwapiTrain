import { Injectable } from "@angular/core";
import { Film, SwapiFilmDto, SwapiFilmResult } from "./film.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable()
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<SwapiFilmDto>("https://swapi.co/api/films/").pipe(
      map(swapiFilmResult => {
        return this.makeFilmTransform(swapiFilmResult.results);
      })
    );
  }

  private makeFilmTransform(swapiFilmResult: SwapiFilmResult[]): Film[] {
    return swapiFilmResult.map(filmResult => {
      const film: Film = {
        title: filmResult.title,
        releaseDate: filmResult.release_date,
        director: filmResult.director,
        description: filmResult.opening_crawl
      };

      return film;
    });
  }
}
