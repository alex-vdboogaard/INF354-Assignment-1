import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component"; // Import ProductListComponent

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ProductApp";
}
