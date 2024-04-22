import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.page.html',
  styleUrls: ['./mycart.page.scss'],
})
export class MycartPage implements OnInit { // Implement OnInit
  cartItems = [
    { 
      id: 1,
      name: 'Product A',
      price: 10.99,
      quantity: 2,
      imageUrl: './assets/br.jpg'
    },
    {
      id: 2,
      name: 'Product B',
      price: 19.99,
      quantity: 1,
      imageUrl: 'path/to/imageB.jpg'
    },
    // More items...
  ];

  selectedItemCount: number = 0;
  totalPrice: number = 0;

  constructor(private router: Router) {} // Inject the Router service

  removeFromCart(item: any) {
    // Logic to remove the item from the cart
  }

  buy() {
    // Logic to handle the purchase action
  }

  goBack() {
    this.router.navigate(['../']); // Navigate to the previous page
  }

  ngOnInit() {
    // Initialization logic goes here
  }
}
