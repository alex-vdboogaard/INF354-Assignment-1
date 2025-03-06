import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-product-list",
  imports: [],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
  ];
}
