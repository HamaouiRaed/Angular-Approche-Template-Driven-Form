import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProducts!: Product[];
  maxPrice: number = 500;
  statValue!: number;
  constructor() {
  }

  ngOnInit(): void {
    this.listProducts = [
      { id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0 },
      { id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0 },
      { id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0 },
    ];
    console.log(this.listProducts);
    this.statValue = 0;
  }
  incrementlike(product: Product) {
    let i = this.listProducts.indexOf(product);
    this.listProducts[i].like++;

  }

  decrementQuantity(product: Product) {
    let i = this.listProducts.indexOf(product);
    if (this.listProducts[i].quantity > 0) {
      this.listProducts[i].quantity--;
    }
  }
getstat(){
  for(let i in this.listProducts){
    if( this.listProducts[i].quantity===0){
      this.statValue++;
    }
  }

}
}