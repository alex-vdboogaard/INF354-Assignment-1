import { Component } from "@angular/core";
import { Product } from "../../models/product.model";
@Component({
  selector: "app-product",
  imports: [],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.css",
})
export class ProductComponent {
  product!: Product;
}
