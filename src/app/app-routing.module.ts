import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FilmDetailComponent } from "./film-detail/film-detail.component";
import { FilmOverviewPageComponent } from "./film-overview-page/film-overview-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/movie", pathMatch: "full" },
  { path: "movie", component: FilmOverviewPageComponent },
  { path: "movie/detail/:id", component: FilmDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
