import { Injectable } from "@angular/core";
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: "Product 1", description: "Description 1", price: 12.99 },
  ];

  constructor() {}

  fetchProduct(id: number): Product | null {
    return this.products.find((p) => p.id === id) || null;
  }
}
