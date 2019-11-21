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

  getFilm(id: number): Observable<SwapiFilmResult> {
    return this.http.get<SwapiFilmResult>(`https://swapi.co/api/films/${id}/`);
  }

  private makeFilmTransform(swapiFilmResult: SwapiFilmResult[]): Film[] {
    return swapiFilmResult.map(filmResult => {
      const film: Film = {
        id: this.extractFilmId(filmResult.url),
        title: filmResult.title,
        releaseDate: filmResult.release_date,
        director: filmResult.director,
        description: filmResult.opening_crawl
      };

      return film;
    });
  }

  private extractFilmId(filmUrl: string): number {
    let id = filmUrl.slice(27, -1);
    return Number(id);
  }
}
