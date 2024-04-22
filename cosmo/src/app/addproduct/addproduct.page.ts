import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage {
  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  selectedImage: File | null = null;

  constructor() {}

  handleImageInput(event: any) {
    this.selectedImage = event.target.files[0];
    // You can perform additional actions with the selected image if needed
  }

  addProduct() {
    // Logic to add the product, including the selected image
  }

  goBack() {
    // Logic to navigate back
  }
  submitForm() {
    throw new Error('Method not implemented.');
    }
    onFileChange($event: Event) {
    throw new Error('Method not implemented.');
    }
}
