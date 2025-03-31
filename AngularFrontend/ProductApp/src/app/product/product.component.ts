import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule for *ngIf, *ngFor, etc.
import { Product } from "../../models/product.model"; // Import Product model
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  standalone: true, // Mark as standalone component
  imports: [CommonModule], // Import necessary modules
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"], // Corrected styleUrls
})
export class ProductComponent {
  @Input() product!: Product; // Input to receive product data

  constructor(private router: Router) {}
  ngOnInit(): void {}

  onEdit(product: Product) {
    this.router.navigate([`edit/${product.id}`]);
  }

  onDelete(product: ProductComponent) {
    this.router.navigate([""]);
  }
}
