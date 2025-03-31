import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../models/product.model";
import { Router } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  @Input() product: Product | undefined; // Make it explicitly optional

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  onEdit() {
    if (this.product) {
      this.router.navigate([`edit/${this.product.id}`]);
    }
  }

  onDelete() {
    if (!this.product) {
      return; // Exit early if product is undefined
    }

    if (confirm("Are you sure you want to delete this product?")) {
      this.productService.deleteProduct(this.product.id).subscribe({
        next: () => {
          window.location.reload();
        },
        error: (err) => {
          console.error("Error deleting product:", err);
          alert(err.message);
        },
      });
    }
  }
}
