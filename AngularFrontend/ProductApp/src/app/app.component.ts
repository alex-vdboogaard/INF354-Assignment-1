import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NavigationComponent } from "./shared/navigation/navigation.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FormsModule, NavigationComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ProductApp";
}
