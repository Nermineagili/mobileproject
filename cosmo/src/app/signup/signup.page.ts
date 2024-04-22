import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  accountType: string = '';
  agreeTerms: boolean = false;
  constructor(private navCtrl: NavController) { }

  goToLoginPage() {
    this.navCtrl.navigateForward('/login'); // Navigate to the login page
  }
  submitForm() {
    // Your form submission logic here
  }
  ngOnInit() {
  }

}
