import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, Product {
  productId?: number;
  productName: string;
  unitPrice: number;
  quantityPerUnit: string;

  showAddProduct: boolean; 
  subscription: Subscription;

  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();


  constructor(private uiService: UiService) { 
    this.showAddProduct = false;
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddProduct = value);
  }
  

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.productName){
      alert('Please add product name');
      return;
    }

    const newProduct = {
      productName: this.productName,
      quantityPerUnit: this.quantityPerUnit,
      unitPrice: this.unitPrice
    }

    this.onAddProduct.emit(newProduct);

    this.productName = '';
    this.quantityPerUnit = '';
    this.unitPrice = 0;

  }

}
