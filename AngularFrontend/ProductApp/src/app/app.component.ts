import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  template: `<app-product-list></app-product-list>`,
})
export class AppComponent {
  title = "ProductApp";
}
