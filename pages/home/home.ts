import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  height: number;
  weight:number;
  bmi: number;
  bmiMsg: string;

  constructor(public navCtrl: NavController) {}

  calcBMI(){
    this.bmi = this.weight / (this.height*this.height);
    this.bmi =parseFloat(this.bmi.toFixed(2));

    if (this.bmi <= 18.5) {
      this.bmiMsg = "Underweight";

    } else if (18.5 < this.bmi && this.bmi <= 25) {
      this.bmiMsg = "Normal";

    } else if (25 < this.bmi && this.bmi <= 30) {
      this.bmiMsg = "Overweight";

    } else {
      this.bmiMsg = "Obese";

    }
  }
}
