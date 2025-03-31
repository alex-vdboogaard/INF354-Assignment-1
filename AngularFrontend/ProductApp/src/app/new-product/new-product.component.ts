import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../services/product.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-new-product",
  imports: [],
  templateUrl: "./new-product.component.html",
  styleUrl: "./new-product.component.css",
})
export class NewProductComponent implements OnInit {
  id: number | null = null;
  product: Product = { id: 0, name: "", description: " ", price: 0 };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get("id");
    if (idParam) {
      this.id = +idParam; // Convert ID to a number
      this.productService.fetchProduct(this.id).subscribe({
        next: (product) => {
          this.product = product;
        },
        error: (error) => {
          console.error("Error fetching product:", error);
          alert("Error fetching product details. Returning to product list.");
          this.router.navigate(["/products"]);
        },
      });
    } else {
      // Handle case when no ID is provided
      alert("No product ID provided. Returning to product list.");
      this.router.navigate(["/products"]);
    }
  }

  create(form: NgForm): void {
    if (form.valid && this.product) {
      const updatedProduct: Product = {
        ...this.product,
        name: form.value.name,
        description: form.value.description,
        price: form.value.price,
      };

      this.productService.createProduct(this.product).subscribe({
        next: (response) => {
          this.router.navigate(["/products"]); // Navigate back to product list
        },
        error: (error) => {
          console.error("Error creating product:", error);
          alert("Error creating product. Please try again.");
        },
      });
    } else {
      alert("Please fill out all required fields correctly.");
    }
  }
}
