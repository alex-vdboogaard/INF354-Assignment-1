import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { EditPageComponent } from "./edit-page/edit-page.component";

export const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "edit", component: EditPageComponent },
  { path: "**", component: ProductListComponent },
];
