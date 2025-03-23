import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule for *ngFor
import { ProductComponent } from "../product/product.component"; // Import ProductComponent for child component
import { Product } from "../../models/product.model";

@Component({
  selector: "app-product-list",
  standalone: true, // Mark as standalone component
  imports: [CommonModule, ProductComponent], // Import necessary modules
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"], // Corrected styleUrls
})
export class ProductListComponent {
  products = [
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit conubia per morbi orci vivamus nullam, natoque cursus a himenaeos habitant sociis lobortis id diam facilisi sed. Suscipit urna himenaeos litora aliquet erat convallis neque accumsan, ridiculus imperdiet vivamus quis at sagittis class. Faucibus imperdiet laoreet proin mattis ultrices felis conubia ante, sociis ad iaculis praesent urna dignissim viverra non, vehicula pharetra eu interdum taciti potenti tellus.",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
    {
      id: 1,
      name: "Macbook Air",
      description: "8gb unified memory",
      price: 13999.99,
    },
  ];
  fetchProduct(id: number): Product | null {
    return this.products.find((p) => p.id === id) || null;
  }
}
