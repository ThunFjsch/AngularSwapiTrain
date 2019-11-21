import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Film } from "../../film.model";

@Component({
  selector: "app-film-card",
  templateUrl: "./film-card.component.html",
  styleUrls: ["./film-card.component.scss"]
})
export class FilmCardComponent {
  @Input() film: Film[];
  @Output() moreClick = new EventEmitter();

  onMoreClick(film: Film) {
    this.moreClick.emit();
  }
}
