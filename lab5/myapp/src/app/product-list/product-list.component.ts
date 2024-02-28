import { Component, Input } from '@angular/core';
import { Category, Product } from '../category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() category!: Category;
  productsShow: boolean = false;
  products: Product[] = [];

  categoryCheck(){
    if (this.productsShow) {
      this.products = this.category.products;
    } else {
      this.products = [];
    }
  }

  removeProduct(name: string){
    this.products = this.products.filter((product) => product.name !== name)
  }
}
