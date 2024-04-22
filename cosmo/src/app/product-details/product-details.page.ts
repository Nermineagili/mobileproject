import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

 // Method to navigate to the previous page
 goBack() {
  this.router.navigate(['../']); // Navigate to the previous page
}
  
  ngOnInit() {
    // Retrieve the selected product from the state parameter
    this.product = history.state.product;

    // Alternatively, you can use the ActivatedRoute to get the product
    // this.activatedRoute.data.subscribe(data => {
    //   this.product = data.product;
    // });
  }
}
