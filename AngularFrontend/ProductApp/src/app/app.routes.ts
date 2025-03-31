import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { EditPageComponent } from "./edit-page/edit-page.component";
import { NewProductComponent } from "./new-product/new-product.component";

export const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "edit/:id", component: EditPageComponent },
  { path: "new-product", component: NewProductComponent },
  { path: "**", component: ProductListComponent },
];
