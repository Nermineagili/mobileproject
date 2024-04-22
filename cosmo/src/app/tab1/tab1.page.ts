import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Product } from '../product.model'; // Import the Product interface

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: Product[] = [
    { imageUrl: '../assets/br.jpg', name: 'Product 1', description: 'Description 1' },
    { imageUrl: '../assets/tab1.jpg', name: 'Product 2', description: 'Description 2' },
    { imageUrl: '../assets/tab2.jpg', name: 'Product 3', description: 'Description 3' },
    { imageUrl: '../assets/tab3.jpg', name: 'Product 4', description: 'Description 4' },// Add more product data as needed
  ];

  constructor(private navCtrl: NavController) {}

  goToCartPage() {
    // Navigate to the cart page here
    this.navCtrl.navigateForward('/mycart'); // Replace '/cart' with the path to your cart page
  }

  goToProductDetailsPage(product: Product) {
    this.navCtrl.navigateForward('/product-details', {
      state: { product } // Pass the selected product using state parameter
    });
  }
  addToFavorites(product: Product) {
    // Implement logic to add product to favorites
  }
}
