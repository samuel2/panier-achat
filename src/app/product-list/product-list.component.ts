import { Component } from '@angular/core';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  title = 'panier-achat';
  products = [
    { id: 1, nom: 'Product A', prix: 10 },
    { id: 2, nom: 'Product B', prix: 5 },
    { id: 3, nom: 'Product C', prix: 23 },
    { id: 4, nom: 'Product D', prix: 108 },
    { id: 5, nom: 'Product E', prix: 67 },
  ];
  cartItems: any[] = [];

  addToCart(product: any) {
    if (this.cartItems.some(item => item.id === product.id)) {
        return;
    }
    this.cartItems.push(product);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }
}
