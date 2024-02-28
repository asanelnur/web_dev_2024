import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, Product, categories } from '../category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter();

  Ilike(product: Product){
    product.likes=product.likes+1;
  }
  removeProduct(){
    this.remove.emit(this.product.name);
  }
}
