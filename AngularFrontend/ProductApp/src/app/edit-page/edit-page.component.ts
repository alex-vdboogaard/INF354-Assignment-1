import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Product } from "../../models/product.model";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-edit-page",
  templateUrl: "./edit-page.component.html",
  styleUrls: ["./edit-page.component.css"],
})
export class EditPageComponent implements OnInit {
  id: number | null = null;
  product: Product | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService // Inject the ProductService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get("id")!; // Get the ID from the route
    if (this.id) {
      this.product = this.productService.fetchProduct(this.id); // Fetch the product
    }
  }

  saveChanges(form: NgForm): void {
    if (form.valid) {
      if (this.product) {
        this.product.name = form.value.name;
        this.product.description = form.value.description;
        this.product.price = form.value.price;

        alert("Product saved");
      }
    } else {
      console.log("Form is invalid");
    }
  }
}
