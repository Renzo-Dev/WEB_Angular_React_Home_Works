import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: string[] = ["Renzo","TheDarkReaper","DiSpaCe","PIPEC"]

  color: string = "желтый";
  login: string = "";
  test: string = "Вкл";

  isCahnge() {
    if (this.test === "Вкл") {
      this.test = "Выкл";
    } else {
      this.test = "Вкл";
    }
  }
    isAdmin() {
    return this.login === "Renzo";
  }

  currentInfo: any;

  carInfo = {
    name: 'Audi R8',
    size: 4.42,
    speed: 330
  };

  planeInfo = {
    name: 'Airbus A380',
    size: 73,
    speed: 945
  };

  shipInfo = {
    name: 'Emma Maersk',
    size: 397,
    speed: 41
  };

  showCarInfo() {
    this.currentInfo = this.carInfo;
  }

  showPlaneInfo() {
    this.currentInfo = this.planeInfo;
  }

  showShipInfo() {
    this.currentInfo = this.shipInfo;
  }
}
