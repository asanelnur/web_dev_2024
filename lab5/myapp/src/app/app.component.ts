import { Component } from '@angular/core';
import { categories } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  categories = categories;
}
