export interface Film {
  id: number;
  title: string;
  releaseDate: Date;
  director: string;
  description: string;
}
export interface SwapiFilmDto {
  count: number;
  next: string | null;
  prev: string | null;
  results: SwapiFilmResult[];
}

export interface SwapiFilmResult {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;

  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
}
