import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "../product/product.component";
import { ProductService } from "../services/product.service";
import { Product } from "../../models/product.model"; // Make sure to import Product model

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.fetchProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error fetching products:", err);
        this.error = "Failed to load products. Error:" + err.message;
        this.loading = false;
      },
    });
  }
}
