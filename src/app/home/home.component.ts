import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Products';
import { ProductService } from '../services/product.service';
import { StatCalculService } from '../services/stat-calcul.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  listProducts!: Product[];
  maxPrice: number = 500;
  statValue!: number;
 
  constructor(private calcul: StatCalculService, private showlist:ProductService) {
  }

  ngOnInit(): void {
   
    this.listProducts=this.showlist.getListProduct();
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
  getstat() {
    for (let i in this.listProducts) {
      if (this.listProducts[i].quantity === 0) {
        this.statValue++;
      }
    }
  }
    getStatService(){

      this.statValue = this.calcul.getStat(this.listProducts, 'quantity', 0);

    }
  }

