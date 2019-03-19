import { Component } from '@angular/core';
import { Car } from '../interfaces/Car';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements Car {
  public isActiveClass = true;
  public isVisible: boolean ;
  name: string;
  mileage: number;
  fuelTankCapacity: number;
  currentFuel: number;
  anotherInfo: string[];
  car: { name: string; mileage: number; currentFuel: number; anotherInfo: string[]; fuelTankCapacity: number };
  constructor() {
    this.car = {
      name: 'Chevrolet Impala',
      mileage: 100,
      fuelTankCapacity: 60,
      currentFuel: 10,
      anotherInfo: ['Engine: 2L', 'Max speed: 200km/h']
    };
  }
  /*
  Method Drive
  */
  public drive() {
    if (this.car.currentFuel <= 0) {
      return ;
    }
    this.car.mileage++;
    this.car.currentFuel--;
  }
  /*
   Method Refuel
   */
  public refuel(): void {
    this.car.currentFuel++;
  }
  /*
  Event Drive
  */
  ClickHandler(e: Event) {
    this.drive();
    this.isActiveClass = !this.isActiveClass;
    this.isVisible = true;
    if (this.car.currentFuel <= 0) {
      return alert('Нужно заправиться на 10 л!') , document.getElementById('id1').style.display = 'none', document.getElementById('id2').style.display = 'inline-block' ; }
  }
  /*
  Event Refuel
  */
    ClickHandler2(e: Event) {
      this.refuel();
      if (this.car.currentFuel === 10) {
        return document.getElementById('id2').style.display = 'none' , document.getElementById('id1').style.display = 'inline-block';
      }
  }
}






