import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const components = [HomeComponent];

export const appRoutes: Route[] = [
  { path: "", component: HomeComponent }
];


