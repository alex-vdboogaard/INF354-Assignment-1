import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../services/product.service";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-new-product",
  imports: [FormsModule],
  templateUrl: "./new-product.component.html",
  styleUrl: "./new-product.component.css",
})
export class NewProductComponent implements OnInit {
  id: number | null = null;
  product: Product = { id: 0, name: " ", description: " ", price: 0 };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  create(form: NgForm): void {
    if (form.valid && this.product) {
      const newProduct: Product = {
        ...this.product,
        name: form.value.name,
        description: form.value.description,
        price: form.value.price,
      };

      this.productService.createProduct(newProduct).subscribe({
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
