import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
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
}
