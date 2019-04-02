import { Component } from '@angular/core';
import { Car } from '../interfaces/Car';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  public isActiveClass = true;
  public isVisible: boolean ;
  car: Car = {
    name: 'Chevrolet Impala',
    mileage: 100,
    fuelTankCapacity: 60,
    currentFuel: 10,
    anotherInfo: ['Engine: 2L', 'Max speed: 200km/h']
  };
  constructor() { }
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
  clickHandlerDrive(e: Event) {
    this.drive();
    this.isActiveClass = !this.isActiveClass;
    this.isVisible = true;
    if (this.car.currentFuel <= 0) {
      return alert('Нужно заправиться на 10 л!') ,
        document.getElementById('drive').style.display = 'none',
        document.getElementById('refuel').style.display = 'inline-block' ; }
  }
  /*
  Event Refuel
  */
    clickHandlerRefuel(e: Event) {
      this.refuel();
      if (this.car.currentFuel === 10) {
        return document.getElementById('refuel').style.display = 'none' ,
          document.getElementById('drive').style.display = 'inline-block';
      }
  }
}






