import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-product';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.css']
})
export class ProductListsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { 

  }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((products) => this.products = products);
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product)
      .subscribe(()=> this.products = this.products.filter(x=> x.productId !== product.productId));
  }

  addProduct(product: Product) {
    this.productService.addProduct(product)
      .subscribe((newProduct) => this.products.push(newProduct));
  }

}
