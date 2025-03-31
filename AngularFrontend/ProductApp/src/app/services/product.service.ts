import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private apiUrl = "http://localhost:5021/products";

  constructor(private http: HttpClient) {}

  fetchProducts(): Observable<Product[]> {
    const exampleProducts: Product[] = [
      {
        id: 1,
        name: "Laptop",
        description: "High-performance gaming laptop",
        price: 1299.99,
      },
      {
        id: 2,
        name: "Smartphone",
        description: "Latest model with advanced camera",
        price: 899.99,
      },
      {
        id: 3,
        name: "Headphones",
        description: "Noise-cancelling wireless headphones",
        price: 249.99,
      },
      {
        id: 4,
        name: "Tablet",
        description: "Lightweight tablet with stylus support",
        price: 499.99,
      },
    ];
    return of(exampleProducts);
    // return this.http.get<Product[]>(this.apiUrl);
  }

  fetchProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
