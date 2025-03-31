import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule for *ngIf, *ngFor, etc.
import { Product } from "../../models/product.model"; // Import Product model
import { Router } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  standalone: true, // Mark as standalone component
  imports: [CommonModule], // Import necessary modules
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"], // Corrected styleUrls
})
export class ProductComponent {
  @Input() product!: Product; // Input to receive product data

  constructor(private router: Router, private productService: ProductService) {}
  ngOnInit(): void {}

  onEdit(product: Product) {
    this.router.navigate([`edit/${product.id}`]);
  }

  onDelete(product: ProductComponent) {
    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.deleteProduct(product.product.id).subscribe({
        next: (data) => {
          window.location.reload();
        },
        error: (err) => {
          console.error("Error fetching products:", err);
          alert(err.message);
        },
      });
    }
  }
}
