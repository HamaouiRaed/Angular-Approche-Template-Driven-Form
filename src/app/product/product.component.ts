import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Input() priceMaxInput!: number;
  @Output() incrementEvent = new EventEmitter<Product>();
  @Output() decrementEvent = new EventEmitter<Product>();
  constructor() {
  }
  ngOnInit(): void {
  }
   
  sendNotifQuantity() {
    this.decrementEvent.emit(this.product);

  }
}
