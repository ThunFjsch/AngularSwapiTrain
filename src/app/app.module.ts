import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilmCardComponent } from "./film-overview-page/film-card/film-card.component";
import { FilmService } from "./film.service";
import { FilmDetailComponent } from "./film-detail/film-detail.component";
import { FilmOverviewPageComponent } from "./film-overview-page/film-overview-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import {
  MatProgressSpinnerModule,
  MatDividerModule,
  MatButtonModule,
  MatExpansionModule
} from "@angular/material/";

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FilmDetailComponent,
    FilmOverviewPageComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatExpansionModule,
    MatDividerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule {}
