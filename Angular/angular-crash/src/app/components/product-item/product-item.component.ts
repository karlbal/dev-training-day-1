import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product; 
  @Output() onDeleteClick: EventEmitter<Product> = new EventEmitter();


  faTimes = faTimes; 

  constructor() { }

  ngOnInit(): void {
  }

  deleteClick() {
    this.onDeleteClick.emit(this.product);
  }

}
