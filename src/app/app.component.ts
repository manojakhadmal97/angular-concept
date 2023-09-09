import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "How to send data from parent to child";
  data = 'Default Data';

  sendDataToChild() {
    this.data = "It's a child Data";
  }
}
